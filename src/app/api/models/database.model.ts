import type { Models } from 'appwrite';

export interface Monsters extends Partial<Models.Document> {
  name: string;
  basicInitiative: number;
}
