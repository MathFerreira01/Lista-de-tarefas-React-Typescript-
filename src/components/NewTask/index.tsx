import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import List, { InfoList } from '../List'

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

  const [task, setTask] = useState<string>('')

  const [todoList, setTodoList] = useState([])

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
            value={task}
            onChange={(event) => setTask(event.target.value)}
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
