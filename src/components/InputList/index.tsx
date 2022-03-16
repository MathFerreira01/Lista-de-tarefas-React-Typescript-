import React from "react";
import TextField from "@mui/material/TextField";

import { Container, InputAlt, TitleListToDo } from "./styles";

const InputList: React.FC = () => {
  return (
    <Container>
      <InputAlt>
        <TextField
          placeholder="Procurar tarefas"
          style={{ width: "599px", height: "46px" }}
        />
      </InputAlt>
      <TitleListToDo>
        <h1>Tarefas</h1>
      </TitleListToDo>
    </Container>
  );
};

export default InputList;
