import { create } from "zustand";

export interface IVariable {
  id: string;
  name: string;
  content: string;
}

interface VariablesStore {
  variables: IVariable[];
  addVariable: (variable: IVariable) => void;
  removeVariable: (id: string) => void;
  updateVariable: (id: string, value: string) => void;
}

export const useVariablesStore = create<VariablesStore>((set) => ({
  variables: [],

  addVariable: (variable) =>
    set((state) => {
      console.log("Adding variable:", variable);
      return { variables: [...state.variables, variable] };
    }),

  removeVariable: (id) =>
    set((state) => ({
      variables: state.variables.filter((variable) => variable.id !== id),
    })),

  updateVariable: (id, content) =>
    set((state) => ({
      variables: state.variables.map((variable) =>
        variable.id === id ? { ...variable, content } : variable
      ),
    })),
}));
