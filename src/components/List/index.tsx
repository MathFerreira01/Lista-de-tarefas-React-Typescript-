import React, { useState } from "react";

import Button from "@mui/material/Button";


import {AddTasks} from "./styles";

import InputList from "../InputList";
import NewTask from "../NewTask";

import { ITypes } from "../../types";
import Description from "./Description";

const List: React.FC = () => {

  const [lists, setLists] = useState<ITypes[]> ([])
    
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModel = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <InputList />
      {lists.map((list, index) => (
        <Description 
          key={index}
          {...list}
          />
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

