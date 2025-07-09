import type { Account } from '../models/account.model.ts';

export const fetchAccountById = async (id: number): Promise<Account> => {
  const res = await fetch(`/api/accounts/${id}`);
  if (!res.ok) throw new Error('Lỗi lấy account');
  return res.json();
};
