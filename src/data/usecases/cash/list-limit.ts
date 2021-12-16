import { ListLimit } from '../../../domain/usecases';
import { LocalStorage } from '../../../infra/storage';
import { LIMIT_BUY } from '../../../main/config/constants';

export const listLimit: ListLimit = () => {
  const limit = LocalStorage.getItem(LIMIT_BUY);

  return limit || 0;
};
