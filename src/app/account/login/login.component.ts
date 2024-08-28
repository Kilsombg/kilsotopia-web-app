import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { User } from 'src/app/shared/models/account/user';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment.development';
import { CredentialResponse } from 'google-one-tap';
import { jwtDecode } from 'jwt-decode';
import { LoginWithExternal } from 'src/app/shared/models/account/loginWithExternal';
import { SD } from 'src/app/shared/constants/sd';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('googleButton', { static: true }) googleButton: ElementRef = new ElementRef({});
  loginForm: FormGroup = new FormGroup({});
  submitted = false;
  errorMessages: string[] = [];

  constructor(private accountService: AccountService,
    private sharedService: SharedService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document) {
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
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  login() {
    this.submitted = true;
    this.errorMessages = [];

    if (this.loginForm.valid) {
      this.accountService.login(this.loginForm.value).subscribe({
        next: _ => {
          this.router.navigateByUrl('/');
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

  resendEmailConfirmationLink() {
    this.router.navigateByUrl('/account/send-email/resend-email-confirmation-link');
  }

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
        { size: 'medium', shape: 'pill', text: 'continue_with', logo_alignment: 'center', locale: 'en', width: 280 }
      );
    };
  }

  private async googleCallBack(response: CredentialResponse) {
    const decodedToken: any = jwtDecode(response.credential);
    this.accountService.loginWithThirdParty(new LoginWithExternal(response.credential, decodedToken.sub, SD.google)).subscribe({
      next: _ => {
        this.router.navigateByUrl('/');
      }, error: error => {
        this.sharedService.showNotification(false, "Failed", error.error);
      }
    })
  }
}
