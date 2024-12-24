import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserService } from '@api/services';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  standalone: false,
})
export class LoginComponent {
  private readonly _messageService = inject(MessageService);
  private readonly _userService = inject(UserService);
  private readonly _router = inject(Router);

  public readonly form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  public login(): void {
    const { email, password } = this.form.value;
    this._userService.login(email!, password!).subscribe({
      next: () => this._router.navigate(['/']),
      error: (error) =>
        this._messageService.add({
          detail: error.message,
          severity: 'error',
          life: 3000,
        }),
    });
  }
}
