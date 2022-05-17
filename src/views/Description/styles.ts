import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

  height: 140px;
  width: 450px;

  background: #0047ff;
  border-radius: 10px;
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;

    color: #ffffff;
  }

  > span {
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
    font-style: normal;
  }
`;

export const ButtonConcluded = styled.div``;

export const EditIcon = styled.div`
  cursor: pointer;
`;
