import styled from "styled-components";
import { useVariablesStore } from "../../stores/variablesStore";
import Variable from "../Variable/Variable";

function VariablesList() {
  const variables = useVariablesStore((state) => state.variables);

  return (
    <div>
      {variables.map((variable) => (
        <VariablesListContainer key={variable.id}>
          <Variable
            variableName={variable.name}
            variableContent={variable.content}
          />
        </VariablesListContainer>
      ))}
    </div>
  );
}

const VariablesListContainer = styled.div`
  display: flex;
  margin-top: 4px;
  margin-bottom: 4px;
`;

export default VariablesList;
