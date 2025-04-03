import styled from "styled-components";

interface IVariable {
  variableName: string;
  variableContent: string;
}

function Variable({ variableName, variableContent }: IVariable) {
  return (
    <VariableContainer>
      <span>
        <p>{variableName}</p>
      </span>
      <p>{variableContent}</p>
    </VariableContainer>
  );
}

const VariableContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;

  > span {
    min-width: 100px;
    height: 40px;
    border-radius: 7px;
    background-color: #7cc0ee;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 25px;
  }
`;

export default Variable;
