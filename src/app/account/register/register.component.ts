import { Component, ElementRef, Inject, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AccountService } from '../account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { User } from 'src/app/shared/models/account/user';
import { environment } from 'src/environments/environment.development';
import { CredentialResponse } from 'google-one-tap';
import { jwtDecode } from 'jwt-decode';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('googleButton', { static: true }) googleButton: ElementRef = new ElementRef({});
  registerForm: FormGroup = new FormGroup({});
  submitted = false;
  errorMessages: string[] = [];

  constructor(private accountService: AccountService,
    private sharedService: SharedService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
) {
    this.accountService.user$.pipe(take(1)).subscribe({
      next: (user: User | null) => {
        if (user) {
          this.router.navigateByUrl('/');
        }
      }
    })
  }

  ngOnInit(): void {
    this.initializeGoogleButton();
    this.initializeForm();
  }

  ngAfterViewInit() {
    const script1 = this._renderer2.createElement('script');
    script1.src = 'https://accounts.google.com/gsi/client?hl=en';
    script1.async = 'true';
    script1.defer = 'true';
    this._renderer2.appendChild(this._document.body, script1);
  }

  initializeForm(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.pattern('^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    })
  }

  register() {
    this.submitted = true;
    this.errorMessages = [];

    if (this.registerForm.valid) {
      this.accountService.register(this.registerForm.value).subscribe({
        next: (response: any) => {
          this.sharedService.showNotification(true, response.value.title, response.value.message);
          this.router.navigateByUrl('/account/login');
          console.log(response);
        },
        error: error => {
          if (error.error.errors) {
            this.errorMessages = error.error.errors;
          } else {
            this.errorMessages.push(error.error);
          }
        }
      })
    }
  };

  private initializeGoogleButton() {
    (window as any).onGoogleLibraryLoad = () => {
      // @ts-ignore
      google.accounts.id.initialize({
        client_id: environment.googleClientId,
        callback: this.googleCallBack.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true
      });

      // @ts-ignore
      google.accounts.id.renderButton(
        this.googleButton.nativeElement,
        { size: 'medium', shape: 'pill', text: 'continue_with', logo_alignment: 'center', locale: 'en', width: 280}
      );
    };
  }

  private async googleCallBack(response: CredentialResponse) {
    const decodedToken: any = jwtDecode(response.credential);
    this.router.navigateByUrl(`/account/register/third-party/google?access_token=${response.credential}&userId=${decodedToken.sub}`)
  }
}
