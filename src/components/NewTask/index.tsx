import React, { useState } from "react";
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
  toggleModel(): void;
}

const NewTask: React.FC<baseModal> = ({ isModalVisible, toggleModel }) => {
  
  if (!isModalVisible) {
    return null;
  }

  return (
    <Container>
      <CardAddTask>
        <TitleNewTask>
          <h3>Criar tarefa</h3>
        </TitleNewTask>

        <NameTask>
          <TextField
            label="Nome da tarefa"
            placeholder="Nome"
            style={{ width: "265px" }}
          />
        </NameTask>

        <DescriptionTask>
          <TextField
            label="Descrição da tarefa"
            placeholder="Descrição da tarefa"
            style={{ width: "265px" }}
          />
        </DescriptionTask>

        <SaveTask>
          <span onClick={toggleModel}>CANCELAR</span>
          <span>SALVAR</span>
        </SaveTask>
      </CardAddTask>
    </Container>
  );
};

export default NewTask;
