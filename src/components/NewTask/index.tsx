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
import Description from "../List/Description";

interface Types {
  name: string;
  description: string;
}

function NewTask({ isModalVisible, toggleModel }: baseModal) {

  const [lists, setLists] = useState<string[]>([]);
  const [taskName, setTaskName] = useState<string>("");
  const [descriptionTask, setDescriptionTask] = useState<string>("");

  const handleChangeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(taskName);
  };

  const handleChangeNameTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  const handleChangeDescriptionTask = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescriptionTask(event.target.value);
  };

  const addNewTask = () => {
    const itensCopy = Array.from(lists);
    itensCopy.push(taskName, descriptionTask);
    setLists(itensCopy);
  }

  if (!isModalVisible) {
    return null;
  }

  return (
    <Container>
      <CardAddTask onSubmit={handleChangeSubmit}>
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
            value={taskName}
            onChange={handleChangeNameTask}
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
            value={descriptionTask}
            onChange={handleChangeDescriptionTask}
          />
        </DescriptionTask>

        <SaveTask>
          <span onClick={toggleModel}>CANCELAR</span>
          <span onClick={addNewTask}>SALVAR</span>
        </SaveTask>

        {lists.map((list, index) => (
          <Description key={index} {...list} />
        ))}

      </CardAddTask>
    </Container>
  );
}

export default NewTask;
