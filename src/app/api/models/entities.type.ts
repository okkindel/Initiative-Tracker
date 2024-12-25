import { type Models } from 'appwrite';

import { Monster } from './database.model';

export const databaseDictionary = {
  monsters: 'monsters',
} as const;

export interface Database {
  monsters: Monster;
}

export type Collection = keyof typeof databaseDictionary;
export type Dto<T extends Database[keyof Database]> = Models.Document & T;
export type Response<T extends Collection> = Dto<Database[T]>;
