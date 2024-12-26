import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { QItem } from '@core/utils';

@Component({
  templateUrl: './initiative-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'it-initiative-modal',
  standalone: false,
})
export class InitiativeModalComponent {
  private readonly _dialogConfig = inject(DynamicDialogConfig);
  private readonly _dialogRef = inject(DynamicDialogRef);

  public readonly data: QItem = this._dialogConfig.data['item'];
  public initiative = this.data.totalInitiative;

  constructor() {
    this._dialogConfig.header = `${this.data.name} Initiative`;
    this._dialogConfig.closeOnEscape = true;
    this._dialogConfig.closable = true;
    this._dialogConfig.width = '40rem';
  }

  public save(): void {
    this._dialogRef.close(this.initiative);
  }
}
