import {
  ChangeDetectionStrategy,
  Component,
  signal,
  inject,
} from '@angular/core';
import { InitiativeDiceModalComponent } from '@core/modals';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  standalone: false,
})
export class HomeComponent {
  private readonly _dialogService = inject(DialogService);

  public readonly dialogVisible = signal(false);

  public roll(): void {
    const ref = this._dialogService.open(InitiativeDiceModalComponent, {});
    ref.onClose.subscribe((res) => console.log('closed', res));
    // this.dialogVisible.set(true);
    // setTimeout(() => this._diceBox()?.roll('1d10'), 1000);
  }
}
