import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 192px;
  height: 100%;
  background: #0047ff;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  margin-top: 2rem;
`;

export const InfoAccount = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3%;
  font-size: 14px;
  color: #ffffff;

  > span {
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }
`;

export const LineProfile = styled.span`
  position: absolute;
  width: 143px;
  height: 1px;
  left: 24px;
  top: 93px;

  background: #ffffff;
`;

export const Tasks = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 132px;
  height: 40px;

  left: 30px;
  top: 116px;

  transition: all 0.3s;
  cursor: pointer;

  :hover {
    background: #0039cc;
    border-radius: 10px;
  }

  > strong {
    font-size: 14px;
    color: #ffffff;
    margin-left: 24px;
  }
`;

export const Info = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 132px;
  height: 40px;

  left: 30px;
  top: 170px;

  transition: all 0.3s;
  cursor: pointer;

  :hover {
    background: #0039cc;
    border-radius: 10px;
  }

  > strong {
    font-size: 14px;
    color: #ffffff;
    margin-left: 24px;
  }
`;
