import {
  ChangeDetectionStrategy,
  Component,
  signal,
  inject,
} from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { DatabaseService, UserService } from '@api/services';
import { InitiativeDiceModalComponent } from '@core/modals';
import { DialogService } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';
import { Monster } from '@api/models';
import { Queue } from '@core/utils';
import { Query } from 'appwrite';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex flex-col h-full' },
  templateUrl: './home.component.html',
  standalone: false,
})
export class HomeComponent {
  private readonly _databaseService = inject(DatabaseService);
  private readonly _dialogService = inject(DialogService);
  private readonly _userService = inject(UserService);
  private readonly _router = inject(Router);

  public readonly monsters = injectQuery(() => ({
    queryKey: ['monsters'],
    queryFn: (): Promise<Monster[]> =>
      this._databaseService
        .list('monsters', [Query.limit(10000)])
        .then((res) => res.documents),
  }));

  public readonly queue = signal<Queue>(
    Queue.fromPlayers(['Dagmar', 'Ditrich', 'Fulko', 'Salvas']),
  );

  public monsterSelected(monster: Monster): void {
    this._dialogService
      .open(InitiativeDiceModalComponent, {})
      .onClose.subscribe((roll) => {
        this.queue.set(this.queue().addMonster(monster, roll).regenerate());
      });
  }

  public logout(): void {
    this._userService.logout().subscribe(() => {
      this._router.navigate(['/login']);
    });
  }
}
