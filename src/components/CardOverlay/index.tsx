import React from 'react';

import { Container, LineEdit, LineDelete } from './styles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const CardOverlay: React.FC = () => {
  return (
      <Container>
          <LineEdit>
            <ModeEditIcon style={{color: 'rgba(0, 0, 0, 0.4)', width: '16px', height: '20px'}}/>
            <span>Atualizar tarefa</span>
          </LineEdit>
          <LineDelete>
            <DeleteOutlineIcon style={{color: 'rgba(0, 0, 0, 0.4)', width: '18px', height: '20px'}}/>
            <span>Remover Tarefa</span>
          </LineDelete>
      </Container>
  )
}

export default CardOverlay;