export type Memo = {
  id?: number;
  content: string;
  createdAt?: number;
  deleted?: boolean;
};

export type Dialog = {
  type: 'alter' | 'confirm';
  text: string;
};
