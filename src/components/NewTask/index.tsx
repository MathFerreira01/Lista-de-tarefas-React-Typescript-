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

import { baseModal } from "../../types";

function NewTask ({ isModalVisible, toggleModel}: baseModal) {

  const [inputData, setInputData] = useState<{ name: string; descricao: string; }[]> ([
    {
      name: String(""),
      descricao: String(""),
    },
  ])

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
            type="text"
            id="name"
            name="name"
            placeholder="Nome"
            style={{ width: "265px" }}
            value={inputData}
            
          />
        </NameTask>

        <DescriptionTask>
          <TextField
            label="Descrição da tarefa"
            name="descricao"
            id="descricao"
            type="text"
            placeholder="Descrição da tarefa"
            style={{ width: "265px" }}
            value={inputData}
            
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
