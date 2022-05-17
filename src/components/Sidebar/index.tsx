import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import InfoIcon from "@mui/icons-material/Info";

import {
  Container,
  Profile,
  InfoAccount,
  LineProfile,
  Tasks,
  Info,
} from "./styles";

const Menu: React.FC = () => {
  return (
    <Container>
      <Profile>
        <AccountCircleIcon
          style={{ width: "46px", height: "44px", color: "#FFFFFF" }}
        />
        <InfoAccount>
          <strong>Nome</strong>
          <span>Função</span>
          <LineProfile />
        </InfoAccount>
      </Profile>
      <Tasks>
        <FeaturedPlayListIcon
          style={{ width: "24px", height: "24px", color: "#FFFFFF" }}
        />
        <strong>Tarefas</strong>
      </Tasks>
      <Info>
        <InfoIcon style={{ width: "24px", height: "24px", color: "#FFFFFF" }}/>
        <strong>Sobre</strong>
      </Info>
    </Container>
  );
};

export default Menu;
