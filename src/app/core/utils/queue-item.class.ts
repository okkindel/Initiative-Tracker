import { Monster } from '@api/models';

export class QItem {
  public totalInitiative: number = 0;
  public type: 'monster' | 'player';
  public killed: boolean = false;
  public displayedName: string;
  public name: string;
  public id: string;

  public basicInitiative?: number;
  public initiativeRoll?: number;
  public avatarSrc?: string;

  constructor({ type, name }: { type: 'monster' | 'player'; name: string }) {
    this.id = name.toLowerCase().replace(/\s/g, '-');
    this.displayedName = name;
    this.type = type;
    this.name = name;
  }

  public static fromMonster(monster: Monster): QItem {
    const item = new QItem({ type: 'monster', name: monster.name });
    item.basicInitiative = monster.basicInitiative;
    return item;
  }

  public static fromPlayer(name: string): QItem {
    const item = new QItem({ type: 'player', name });
    item.avatarSrc = `assets/icons/${item.id}.png`;
    return item;
  }

  public withInitiativeRoll(initiative: number): QItem {
    this.initiativeRoll = initiative;
    return this;
  }

  public calculateTotal(): QItem {
    if (this.basicInitiative) {
      this.totalInitiative = this.basicInitiative + (this.initiativeRoll ?? 0);
    }
    return this;
  }

  public toggleKilled(): QItem {
    this.killed = !this.killed;
    return this;
  }
}

export const compareQItems = (a: QItem, b: QItem): number =>
  b.totalInitiative - a.totalInitiative === 0
    ? (b.basicInitiative ?? 0) - (a.basicInitiative ?? 0)
    : b.totalInitiative - a.totalInitiative;
