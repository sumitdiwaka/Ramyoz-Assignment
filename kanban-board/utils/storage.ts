import { Card } from '@/types';

const STORAGE_KEY = 'kanban-cards';

export const saveCardsToLocalStorage = (cards: Card[]): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
  }
};

export const getCardsFromLocalStorage = (): Card[] => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  }
  return [];
};