import styled from "styled-components";
import { useInputVariableStore } from "../../stores/inputVariableStore";
import { useVariablesStore } from "../../stores/variablesStore";

function CreateVariable() {
  const handleToggleForm = () => {
    setIsFormVisible();
  };

  const addVariable = useVariablesStore((state) => state.addVariable);

  const isFormVisible = useInputVariableStore((state) => state.isFormVisible);
  const setIsFormVisible = useInputVariableStore(
    (state) => state.setIsFormVisible
  );
  const name = useInputVariableStore((state) => state.name);
  const content = useInputVariableStore((state) => state.content);
  const setName = useInputVariableStore((state) => state.setName);
  const setContent = useInputVariableStore((state) => state.setContent);

  return (
    <CreateVariableContainer>
      <button onClick={handleToggleForm}>Create Variable</button>
      <AddVariableFormContainer className={isFormVisible ? "" : "hidden"}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Variable Name"
        />
        <input
          onChange={(e) => setContent(e.target.value)}
          value={content}
          type="text"
          placeholder="Content"
        />
        <button
          onClick={() => {
            addVariable({
              id: name,
              name: name,
              content: content,
            });
            setName("");
            setContent("");
            handleToggleForm();
          }}
        >
          Add Variable
        </button>
      </AddVariableFormContainer>
    </CreateVariableContainer>
  );
}
const CreateVariableContainer = styled.div`
  margin-top: 35px;
`;

const AddVariableFormContainer = styled.div`
  &.hidden {
    display: none;
  }
`;

export default CreateVariable;
