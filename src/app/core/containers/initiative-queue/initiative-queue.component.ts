import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  model,
} from '@angular/core';
import { InitiativeModalComponent } from '@core/containers';
import { DialogService } from 'primeng/dynamicdialog';
import { QItem, Queue } from '@core/utils';

@Component({
  templateUrl: './initiative-queue.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block max-w-[1000px] w-full' },
  selector: 'it-initiative-queue',
  standalone: false,
})
export class InitiativeQueueComponent {
  private readonly _dialogService = inject(DialogService);

  public readonly queue = model.required<Queue>();
  public readonly list = computed(() => this.queue().sort().items);

  public removeItem(item: QItem): void {
    this.queue.set(this.queue().remove(item).regenerate());
  }

  public changeInitiative(item: QItem): void {
    this._dialogService
      .open(InitiativeModalComponent, {
        data: { item },
      })
      .onClose.subscribe((initiative) => {
        if (!initiative) return;
        item.totalInitiative = initiative;
        this.queue.set(this.queue().regenerate());
      });
  }
}
