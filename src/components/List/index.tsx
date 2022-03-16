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
import CardOverlay from '../CardOverlay'

export interface IList {
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

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModel = () => {
    setIsModalVisible(!isModalVisible);
  };

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <>
      <InputList />
      {lists.map((list) => (
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
            <MoreVertIcon 
            onClick={toggleOverlay}
            style={{ color: "#FFFFFF" }} />
          </EditIcon>
          <CardOverlay toggleOverlay={toggleOverlay} isOverlayVisible={isOverlayVisible}/>
        </Container>
      ))}

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
          onClick={toggleModel}
        >
          + Nova tarefa
        </Button>
        <NewTask toggleModel={toggleModel} isModalVisible={isModalVisible} />
      </AddTasks>
    </>
  );
};

export default List;
