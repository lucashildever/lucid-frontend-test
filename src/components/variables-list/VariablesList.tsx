import styled from "styled-components";
import { useVariablesStore } from "../../stores/variablesStore";
import Variable from "../Variable/Variable";

function VariablesList() {
  const variables = useVariablesStore((state) => state.variables);

  return (
    <VariablesListContainer>
      {variables.length === 0 ? (
        <p>No variables yet</p>
      ) : (
        variables.map((variable) => (
          <Variable
            key={variable.id}
            variableName={variable.name}
            variableContent={variable.content}
          />
        ))
      )}
    </VariablesListContainer>
  );
}

const VariablesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #cbe7ff;
  padding: 25px;
  width: fit-content;
  border-radius: 15px;
`;

export default VariablesList;
