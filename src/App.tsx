import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAutoCompleteData } from "./api/autoCompleteApi";
import CreateVariable from "./components/create-variable/CreateVariable";
import VariablesList from "./components/variables-list/VariablesList";
import "./styles/App.css";

const AutoCompleteComponent: React.FC = () => {
  const { isLoading, error } = useQuery({
    queryKey: ["autocomplete"],
    queryFn: fetchAutoCompleteData,
  });

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error.message}</div>;

  return (
    <div>
      <VariablesList />
      <CreateVariable />
    </div>
  );
};
export default AutoCompleteComponent;
