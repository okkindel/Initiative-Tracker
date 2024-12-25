import { Monster } from '@api/models';

import { compareQItems, QItem } from './queue-item.class';

export class Queue {
  public items: QItem[] = [];

  constructor(items: QItem[] = []) {
    this.items = items;
  }

  public add(item: QItem): Queue {
    this.items.push(item);
    return this;
  }

  public remove(item: QItem): Queue {
    this.items = this.items.filter((el) => el !== item);
    return this;
  }

  public sort(): Queue {
    this.items = this.items.sort(compareQItems);
    return this;
  }

  public setUniqNames(): Queue {
    this.items.forEach((item, idx) => {
      const allItemsCount = this.items.filter(
        (el) => el.name === item.name,
      ).length;

      const prevItemsCount = this.items
        .slice(0, idx)
        .filter((el) => el.name === item.name).length;

      if (allItemsCount !== 1)
        item.displayedName = `${item.name} #${prevItemsCount + 1}`;
    });

    return this;
  }

  public addMonster = (monster: Monster, roll: number): Queue => {
    const item = QItem.fromMonster(monster)
      .withInitiativeRoll(roll)
      .calculateTotal();
    this.add(item);
    return this;
  };

  public static fromPlayers(players: string[]): Queue {
    const queue = new Queue();
    players.forEach((player) => {
      queue.add(QItem.fromPlayer(player));
    });
    return queue;
  }

  public regenerate(): Queue {
    return new Queue(this.sort().setUniqNames().items);
  }
}
