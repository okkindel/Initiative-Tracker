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
    const nameCounts = this.items.reduce((acc, item) => {
      const count = acc.get(item.id) ?? 0;
      acc.set(item.id, count + 1);
      return acc;
    }, new Map<string, number>());

    this.items.forEach((item) => {
      const count = nameCounts.get(item.id);
      if (count && count > 1) {
        item.displayedName = `${item.name} #${count}`;
        nameCounts.set(item.id, count - 1);
      }
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

  public regenerateWithNewMonster(monster: Monster, roll: number): Queue {
    this.addMonster(monster, roll).sort().setUniqNames();
    return new Queue(this.items);
  }
}
