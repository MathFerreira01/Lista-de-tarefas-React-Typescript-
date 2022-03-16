import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const CardEditTask = styled.section`
  position: absolute;
  top: -80px;
  right: 340px;
  width: 315px;
  height: 367px;

  background: #ffffff;
  border-radius: 10px;
`;

export const TitleEditTask = styled.div`
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

  position: relative;
  top: 105px;
`;

export const StateTask = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  position: relative;
  top: 130px;

  width: 265px;
  height: 40px;

  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const ProgressName = styled.div`
  width: 120px;
  height: 28px;
  margin-left: 5px;
  border-radius: 5px;
  transition: ease all 0.3s;
  cursor: pointer;

  > span {
    font-weight: 600;
    font-size: 14px;
    font-family: 'Montserrat';
    text-align: center;
    
    position: relative;
    top: 5px;
    margin-left: 10%;
  }

  :hover {
    background: #ffffff;
  }
`;

export const Concluded = styled.div`
  width: 120px;
  height: 28px;
  margin-right: 15px;
  border-radius: 5px;
  transition: ease all 0.3s;
  cursor: pointer;

  > span {
    font-weight: 600;
    font-size: 14px;
    font-family: 'Montserrat';
    text-align: center;

    position: relative;
    top: 6px;
    margin-left: 20%;
  }

  :hover {
    background: #ffffff;
  }
`;

export const SaveTask = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  position: absolute;

  left: 132px;
  top: 310px;

  width: 84px;
  height: 16px;

  > span {
    margin: 5px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    cursor: pointer;

    color: #0047ff;
  }
`;
