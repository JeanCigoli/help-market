import { CreateLimit } from '../../../domain/usecases';
import { LocalStorage } from '../../../infra/storage';
import { LIMIT_BUY } from '../../../main/config/constants';

export const createLimit: CreateLimit = (limit: number) => {
  LocalStorage.create(LIMIT_BUY, limit);

  return limit;
};
