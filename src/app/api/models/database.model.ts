import type { Models } from 'appwrite';

export interface Monster extends Partial<Models.Document> {
  name: string;
  basicInitiative: number;
}
