import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MonstersDtoService } from '@core/services';

@Component({
  templateUrl: './add-enemy-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'it-add-enemy-modal',
  standalone: false,
})
export class AddEnemyModalComponent {
  private readonly _dialogConfig = inject(DynamicDialogConfig);
  private readonly _monstersDto = inject(MonstersDtoService);
  private readonly _dialogRef = inject(DynamicDialogRef);

  public readonly form = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    basicInitiative: new FormControl(0, {
      validators: [Validators.required, Validators.min(0), Validators.max(100)],
      nonNullable: true,
    }),
  });

  constructor() {
    this._dialogConfig.header = 'Add Enemy';
    this._dialogConfig.closeOnEscape = true;
    this._dialogConfig.closable = true;
    this._dialogConfig.width = '40rem';
  }

  public save({ withQueue }: { withQueue: boolean }): void {
    if (this.form.invalid) return;

    this._monstersDto.createMonster
      .mutateAsync(this.form.getRawValue())
      .then((data) => {
        this._dialogRef.close({ withQueue, monster: data });
      });
  }
}
