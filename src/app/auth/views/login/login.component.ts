import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserService } from '@api/services';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  standalone: false,
})
export class LoginComponent implements OnInit {
  private readonly _messageService = inject(MessageService);
  private readonly _userService = inject(UserService);
  private readonly _router = inject(Router);

  public readonly isLoggingIn = signal<boolean>(false);

  public ngOnInit(): void {
    if (this._userService.getIsAuthenticated()) this._router.navigate(['/']);
  }

  public readonly form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  public login(): void {
    const { email, password } = this.form.value;
    this.isLoggingIn.set(true);

    this._userService.login(email!, password!).subscribe({
      complete: () => this.isLoggingIn.set(false),
      next: () => this._router.navigate(['/']),
      error: (error) => {
        this.isLoggingIn.set(false);
        this._messageService.add({
          detail: error.message,
          severity: 'error',
          life: 3000,
        });
      },
    });
  }
}
