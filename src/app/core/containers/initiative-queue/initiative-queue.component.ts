import {
  ChangeDetectionStrategy,
  Component,
  computed,
  model,
} from '@angular/core';
import { QItem, Queue } from '@core/utils';

@Component({
  templateUrl: './initiative-queue.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block max-w-[1000px] w-full' },
  selector: 'it-initiative-queue',
  standalone: false,
})
export class InitiativeQueueComponent {
  public readonly queue = model.required<Queue>();

  public readonly list = computed(() => this.queue().sort().items);

  public removeItem(item: QItem): void {
    this.queue.set(this.queue().remove(item).regenerate());
  }
}
