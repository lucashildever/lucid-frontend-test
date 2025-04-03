import { create } from "zustand";

export interface AutoCompleteItem {
  name: string;
  category: string;
  value: string;
  id: string;
}

interface AutoCompleteState {
  data: AutoCompleteItem[];
  setData: (data: AutoCompleteItem[]) => void;
}

export const useAutoCompleteStore = create<AutoCompleteState>((set) => ({
  data: [],
  setData: (data) => set({ data }),
}));
