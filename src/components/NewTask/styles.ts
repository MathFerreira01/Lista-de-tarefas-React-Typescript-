import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

export const CardAddTask = styled.section`
  position: absolute;
  top: 217px;
  width: 315px;
  height: 294px;

  background: #ffffff;
  border-radius: 10px;
`;

export const TitleNewTask = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 24px;
  margin-bottom: 25px;
  top: 20px;
  position: absolute;

  > h3 {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 18px;
    color: #000000;
  }
`;
export const NameTask = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 25px;

  position: relative;
  top: 71px;
`;

export const DescriptionTask = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 25px;
  margin-top: 34px;

  position: relative;
  top: 71px;
`;

export const SaveTask = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
 
  position: absolute;
  
  left: 132px;
  top: 252px;

  width: 84px;
  height: 16px;

  > span {
    margin: 5px;

    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;

    color: #0047ff;
  }
`;
