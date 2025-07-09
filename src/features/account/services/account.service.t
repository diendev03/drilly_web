import { fetchAccountById } from '../repository/account.repository';

export const getAccountInfo = async (id: number) => {
  return await fetchAccountById(id);
};
