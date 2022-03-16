import React from "react";
import TextField from "@mui/material/TextField";

import {
  Container,
  CardAddTask,
  TitleNewTask,
  NameTask,
  DescriptionTask,
  SaveTask,
} from "./styles";

interface baseModal {
  isModalVisible: boolean;
  onBackdropClick: () => void;
  div: string;
}

const NewTask: React.FC<baseModal> = ({onBackdropClick, isModalVisible, div}) => {

  if(isModalVisible) {
    return null
  }

  return (
    <Container>
      <CardAddTask>
        <TitleNewTask>
          <h3>Criar tarefa</h3>
        </TitleNewTask>
        <NameTask>
          <TextField
            id="outlined-helperText"
            label="Nome da tarefa"
            placeholder="Nome"
            style={{width: '265px'}}
          />
        </NameTask>
        <DescriptionTask>
          <TextField
            id="outlined-helperText"
            label="Descrição da tarefa"
            placeholder="Descrição da tarefa"
            style={{width: '265px'}}
          />
        </DescriptionTask>
        <SaveTask>
          <span>CANCELAR</span>
          <span>SALVAR</span>
        </SaveTask>
      </CardAddTask>
    </Container>
  );
};

export default NewTask;
