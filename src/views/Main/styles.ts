import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerInput = styled.div`
  margin: 0 auto;
  margin-top: 70px;
`;

export const AddTasks = styled.a`
  margin-top: 4rem;
  margin-left: 28rem;

  button {
    background: #0047ff;
    color: #ffff;
    width: 150px;
    height: 46px;
  }
`;
