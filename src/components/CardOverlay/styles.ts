import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 142px;
  height: 69px;
  left: 50px;
  top: 250px;

  background: #ffffff;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
`;

export const LineEdit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  top: 10px;

  > span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;

    cursor: pointer;

    color: rgba(0, 0, 0, 0.4);
  }
`;

export const LineDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  top: 20px;
  
  > span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;

    cursor: pointer;

    color: rgba(0, 0, 0, 0.4);
  }
`;
