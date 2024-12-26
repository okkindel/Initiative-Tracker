import {
  injectMutation,
  injectQuery,
} from '@tanstack/angular-query-experimental';
import { Injectable, inject } from '@angular/core';
import { DatabaseService } from '@api/services';
import { Monster } from '@api/models';
import { Query } from 'appwrite';

@Injectable()
export class MonstersDtoService {
  private readonly _databaseService = inject(DatabaseService);

  public readonly monsters = injectQuery(() => ({
    queryKey: ['monsters'],
    queryFn: (): Promise<Monster[]> =>
      this._databaseService
        .list('monsters', [Query.limit(10000), Query.orderAsc('name')])
        .then((res) => res.documents),
  }));

  public readonly createMonster = injectMutation(() => ({
    mutationFn: (value: Monster): Promise<Monster> =>
      this._databaseService.add('monsters', value),
    onSuccess: (): void => {
      this.monsters.refetch();
    },
  }));
}
