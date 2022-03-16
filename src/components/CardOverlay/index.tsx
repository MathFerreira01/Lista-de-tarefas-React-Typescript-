import React, { useState } from 'react';

import { Container, LineEdit, LineDelete } from './styles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import EditTask from '../EditTask'

interface baseOverlayModal {
  isOverlayVisible: boolean;
  toggleOverlay(): void;
}

const CardOverlay: React.FC<baseOverlayModal> = ({isOverlayVisible, toggleOverlay}) => {

  const [isEditVisible, setIsEditVisible] = useState(false);

  const toggleEdit = () => {
    setIsEditVisible(!isEditVisible);
  };

  if (!isOverlayVisible) {
    return null;
  }

  return (
      <Container>
          <LineEdit>
            <ModeEditIcon style={{color: 'rgba(0, 0, 0, 0.4)', width: '16px', height: '20px'}}/>
            <span onClick={toggleEdit}>Atualizar tarefa</span>
          </LineEdit>
          <EditTask toggleEdit={toggleEdit} isEditVisible={isEditVisible}/>
          <LineDelete>
            <DeleteOutlineIcon style={{color: 'rgba(0, 0, 0, 0.4)', width: '18px', height: '20px'}}/>
            <span>Remover Tarefa</span>
          </LineDelete>
      </Container>
  )
}

export default CardOverlay;