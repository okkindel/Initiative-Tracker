import {
  ChangeDetectionStrategy,
  Component,
  signal,
  inject,
} from '@angular/core';
import { UserService } from '@api/services';
import { Router } from '@angular/router';
import { Queue } from '@core/utils';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex flex-col h-full' },
  templateUrl: './home.component.html',
  standalone: false,
})
export class HomeComponent {
  private readonly _userService = inject(UserService);
  private readonly _router = inject(Router);

  public readonly queue = signal<Queue>(
    Queue.fromPlayers(['Dagmar', 'Ditrich', 'Fulko', 'Salvas']),
  );

  public logout(): void {
    this._userService.logout().subscribe(() => {
      this._router.navigate(['/login']);
    });
  }
}
