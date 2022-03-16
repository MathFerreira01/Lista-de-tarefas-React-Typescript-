import React, { useState } from "react";

import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import {
  Container,
  InfoList,
  ButtonConcluded,
  EditIcon,
  AddTasks,
} from "./styles";

import InputList from "../InputList";
import NewTask from "../NewTask";

interface IList {
  name: string;
  description: string;
}


const List: React.FC = () => {
  const [lists, setLists] = useState<IList[]>([
    {
      name: "Matheus",
      description: "Sua tarefa",
    },
  ]);

  const add = () => {
    setLists((prevState) => [
      ...prevState,
      {
        name: "",
        description: "",
      },
    ]);
  };

  const [isModalVisible, setIsModalVisible] = useState(true)

  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => wasModalVisible)
  }
  
  return (
    <>
      <InputList />
      <Container>
        <InfoList>
          <strong>Nome</strong>
          <span>Descrição de tarefa.</span>
        </InfoList>
        <ButtonConcluded>
          <Button
            variant="contained"
            style={{ background: "#FFFFFF", color: "#000000" }}
          >
            Concluído
          </Button>
        </ButtonConcluded>
        <EditIcon>
          <MoreVertIcon style={{ color: "#FFFFFF" }} />
        </EditIcon>
      </Container>
      <AddTasks>
        <Button
          type="button"
          variant="contained"
          style={{
            background: "#0047ff",
            color: "#fffff",
            width: "150px",
            height: "46px",
          }}
          onClick={toggleModal}
        >
          + Nova tarefa
          <NewTask div="Login" isModalVisible={isModalVisible} onBackdropClick={toggleModal}/>
        </Button>
      </AddTasks>
    </>
  );
};

export default List;
