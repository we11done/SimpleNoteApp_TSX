import { Memo } from '../models';

const delays = [500, 750, 1000];
const randomDelay = () => {
  const randomIndex = Math.floor((Math.random() * 10) % delays.length);
  const randomDelay = delays[randomIndex];
  return randomDelay;
};

let store: Memo[] = [
  { id: 2, content: 'Second Memo', createdAt: Date.now() },
  { id: 1, content: 'First Memo', createdAt: Date.now() - 1 },
];

export const fetchMemoList = () =>
  new Promise(resolve => {
    const memoList = store
      .filter(memo => !memo.deleted)
      .sort((a, b) => b.createdAt! - a.createdAt!);
    setTimeout(() => resolve(memoList), randomDelay());
  });

export const fetchDeletedMemoList = () =>
  new Promise(resolve => {
    const deletedMemoList = store
      .filter(memo => !!memo.deleted)
      .sort((a, b) => b.createdAt! - a.createdAt!);
    setTimeout(() => resolve(deletedMemoList), randomDelay());
  });

export const fetchMemo = (memoId: number) =>
  new Promise((resolve, reject) => {
    const memo = store.find(m => m.id === memoId);
    setTimeout(() => (memo ? resolve(memo) : reject(404)), randomDelay());
  });

export const addMemo = (memo: Memo) =>
  new Promise(resolve => {
    const lastMemo = store.sort((a, b) => b.id! - a.id!)[0];
    memo.id = lastMemo ? lastMemo.id! + 1 : 1;
    memo.createdAt = Date.now();
    store = [memo, ...store];
    setTimeout(() => resolve(memo), randomDelay());
  });

export const deleteMemo = (memoId: number) => {
  store = store.map(memo => ({
    ...memo,
    deleted: memo.id === memoId ? true : memo.deleted,
  }));
};

export const restoreMemo = (memoId: number) => {
  store = store.map(memo => ({
    ...memo,
    deleted: memo.id === memoId ? false : memo.deleted,
  }));
};
