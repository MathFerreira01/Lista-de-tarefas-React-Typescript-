import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import {
  Container,
  CardAddTask,
  TitleNewTask,
  ContainerInputs,
  SaveTask,
} from "./styles";

import { baseModal } from "../../types";
import Description from "../Description";

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
    itensCopy.push(taskName);
    setLists(itensCopy);
  };

  if (!isModalVisible) {
    return null;
  }

  return (
    <Container>
      <CardAddTask onSubmit={handleChangeSubmit}>
        <TitleNewTask>
          <h3>Criar tarefa</h3>
        </TitleNewTask>

        <ContainerInputs>
          <div>
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
          </div>

          <div>
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
          </div>
        </ContainerInputs>

        {lists.map((list, index) => (
          <Description key={index} {...list} />
        ))}

        <SaveTask>
          <span onClick={toggleModel}>CANCELAR</span>
          <span onClick={addNewTask}>SALVAR</span>
        </SaveTask>
      </CardAddTask>
    </Container>
  );
}

export default NewTask;