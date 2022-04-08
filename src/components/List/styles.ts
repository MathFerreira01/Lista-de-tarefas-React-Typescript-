import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  max-width: 583px;
  width: 31%;
  height: 146px;
  margin: 0 auto;
  top: 150px;
  margin-bottom: 20px;

  background: #0047ff;
  border-radius: 10px;
  z-index: 1;
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0 90px 24px;

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

export const ButtonConcluded = styled.div`
  position: absolute;
  width: 104px;
  height: 32px;
  left: 24px;
  top: 90px;
`;

export const EditIcon = styled.div`
  position: relative;
  left: 72%;
  top: -40px;
  
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const AddTasks = styled.a`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;

  max-width: 583px;
  width: 31%;
  height: 146px;
  margin: 0 auto;
  top: 110px;
`;