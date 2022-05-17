import React from "react";
import TextField from "@mui/material/TextField";

import {
  Container,
  CardEditTask,
  TitleEditTask,
  NameTask,
  DescriptionTask,
  StateTask,
  ProgressName,
  Concluded,
  SaveTask,
} from "./styles";

interface baseEdit {
  isEditVisible: boolean;
  toggleEdit(): void;
}

const EditTask: React.FC<baseEdit> = ({isEditVisible, toggleEdit}) => {

  if (!isEditVisible) {
    return null;
  }

  return (
    <Container>
      <CardEditTask>
        <TitleEditTask>
          <h3>Editar tarefa</h3>
        </TitleEditTask>
        <NameTask>
          <TextField
            id="outlined-helperText"
            label="Nome da tarefa"
            defaultValue="Nome"
            style={{width: '265px',}}
          />
        </NameTask>
        <DescriptionTask>
          <TextField
            id="outlined-helperText"
            label="Descrição da terefa"
            defaultValue="Descrição grande."
            rows={3}
            style={{width: '265px'}}
          />
        </DescriptionTask>
        <StateTask>
          <ProgressName>
            <span>Em progresso</span>
          </ProgressName>
          <Concluded>
            <span>Concluído</span>
          </Concluded>
        </StateTask>
        <SaveTask>
          <span onClick={toggleEdit}>CANCELAR</span>
          <span>SALVAR</span>
        </SaveTask>
      </CardEditTask>
    </Container>
  );
};

export default EditTask;
