import React, {useState} from "react";
import CardOverlay from "../../components/CardOverlay";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";

import { Container, InfoList, ButtonConcluded, EditIcon } from "./styles";

const Description: React.FC = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <Container>
      <div>
      <InfoList>
        <strong>Name</strong>
        <span>Description</span>
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
        <MoreVertIcon onClick={toggleOverlay} style={{ color: "#FFFFFF" }} />
      </EditIcon>
      <CardOverlay
        toggleOverlay={toggleOverlay}
        isOverlayVisible={isOverlayVisible}
      />
      </div>
    </Container>
  );
};

export default Description;
