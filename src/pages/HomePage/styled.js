import styled from "styled-components";
export const Div = styled.div`
  display: grid;
  grid-template-rows: 160px 160px 1fr;
`;
export const Img = styled.img`
  position: absolute;
  width: 307px;
  height: 113px;
  left: 42%;
  top: 21px;
  align-items: center;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* width: 99vw; */
  justify-items: center;
  row-gap: 30px;
  background-color: #333232;
`;

export const Conteudo = styled.div`
  background-color: #333232;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  color: white;
  position: absolute;
  width: 287px;
  height: 74px;
  left: 80%;
  top: 41px;
  border: none;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  background: #33a4f5;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;