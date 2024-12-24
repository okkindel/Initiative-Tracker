import { type Models } from 'appwrite';

import { Monsters } from './database.model';

export const databaseDictionary = {
  monsters: 'monsters',
} as const;

export interface Database {
  monsters: Monsters;
}

export type Collection = keyof typeof databaseDictionary;
export type Dto<T extends Database[keyof Database]> = Models.Document & T;
export type Response<T extends Collection> = Dto<Database[T]>;
