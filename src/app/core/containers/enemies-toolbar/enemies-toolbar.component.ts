import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  model,
} from '@angular/core';
import { InitiativeDiceModalComponent } from '@core/containers';
import { DialogService } from 'primeng/dynamicdialog';
import { MonstersDtoService } from '@core/services';
import { Monster } from '@api/models';
import { Queue } from '@core/utils';

@Component({
  host: { class: 'flex items-center justify-end gap-4' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'enemies-toolbar.component.html',
  selector: 'it-enemies-toolbar',
  standalone: false,
})
export class EnemiesToolbarComponent {
  private readonly _monstersDto = inject(MonstersDtoService);
  private readonly _dialogService = inject(DialogService);

  public readonly monsters = this._monstersDto.monsters;
  public readonly queue = model.required<Queue>();

  public readonly isRolling = signal<boolean>(false);

  public monsterSelected(monster?: Monster): void {
    if (!monster) return;

    this.isRolling.set(true);

    this._dialogService
      .open(InitiativeDiceModalComponent, {})
      .onClose.subscribe((roll) => {
        this.queue.set(this.queue().addMonster(monster, roll).regenerate());
        this.isRolling.set(false);
      });
  }
}
