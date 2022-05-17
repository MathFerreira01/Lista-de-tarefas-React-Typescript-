import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardAddTask = styled.form`
  width: 315px;
  height: 294px;

  background: #ffffff;
  border-radius: 10px;
`;

export const TitleNewTask = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  
  > h3 {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 18px;
    color: #000000;
  }
`;
export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    margin: 0.3rem;
  }
`;

export const SaveTask = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 1rem;

  > span {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;

    color: #0047ff;
  }
`;
