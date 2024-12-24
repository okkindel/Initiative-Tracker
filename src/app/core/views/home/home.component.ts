import {
  ChangeDetectionStrategy,
  Component,
  signal,
  inject,
} from '@angular/core';
import { InitiativeDiceModalComponent } from '@core/modals';
import { DialogService } from 'primeng/dynamicdialog';
import { UserService } from '@api/services';
import { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  standalone: false,
})
export class HomeComponent {
  private readonly _dialogService = inject(DialogService);
  private readonly _userService = inject(UserService);
  private readonly _router = inject(Router);

  public readonly dialogVisible = signal(false);

  public roll(): void {
    const ref = this._dialogService.open(InitiativeDiceModalComponent, {});
    ref.onClose.subscribe((res) => console.log('closed', res));
    // this.dialogVisible.set(true);
    // setTimeout(() => this._diceBox()?.roll('1d10'), 1000);
  }

  public logout(): void {
    this._userService.logout().subscribe(() => {
      this._router.navigate(['/login']);
    });
  }
}
