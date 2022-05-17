import React, { useState } from "react";

import Button from "@mui/material/Button";

import { Container, ContainerInput, AddTasks } from "./styles";

import TextField from "@mui/material/TextField";
import NewTask from "../NewTask";

const Main: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModel = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <Container>
      <ContainerInput>
        <TextField
          placeholder="Procurar tarefas"
          style={{ width: "599px", height: "46px" }}
        />
      </ContainerInput>

      <AddTasks>
        <Button type="button" variant="contained" onClick={toggleModel}>
          + Nova tarefa
        </Button>        
      </AddTasks>
      <NewTask toggleModel={toggleModel} isModalVisible={isModalVisible} />
    </Container>
  );
};

export default Main;
