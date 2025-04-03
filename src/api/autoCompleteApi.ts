import { AutoCompleteItem } from "../stores/autoCompleteStore";

export const fetchAutoCompleteData = async (): Promise<AutoCompleteItem[]> => {
  const response = await fetch(
    "https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete"
  );
  if (!response.ok) {
    throw new Error("Erro na requisição");
  }
  return response.json();
};
