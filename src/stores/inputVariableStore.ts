import { create } from "zustand";

type IInputVariableStore = {
  name: string;
  content: string;
  isFormVisible: boolean;
  setName: (title: string) => void;
  setContent: (value: string) => void;
  setIsFormVisible: () => void;
};

export const useInputVariableStore = create<IInputVariableStore>((set) => ({
  name: "",
  content: "",
  isFormVisible: false,
  setName: (name) => set({ name }),
  setContent: (content) => set({ content }),
  setIsFormVisible: () =>
    set((state) => ({ isFormVisible: !state.isFormVisible })),
}));
