import styled from "styled-components";
import pokebola from "../../constants/img/pokebola.png";


export const Div = styled.div`
  width: 440px;
  height: 210px;
  border-radius: 12px;
  display: flex;
  position: relative;
  background-color: ${(props) => {
    switch (props.background) {
      case "grass":
        return "#729F92";
      case "water":
        return "#71C3FF";
      case "poison":
        return "#d87cda";
      case "flying":
        return "#BF9762";
      case "fire":
        return "#EAAB7D";
      case "bug":
        return "#76A866";
      case "normal":
        return "#BF9762";
      case "dark":
        return "#635f66";
      case "dragon":
        return "#004170";
      case "electric":
        return "#f5de7a";
      case "fairy":
        return "#f5a7f0";
      case "fighting":
        return "#d36c89";
      case "ghost":
        return "#6879aa";
      case "ground":
        return "#f58c58";
      case "ice":
        return "#9cccc5";
      case "psychic":
        return "#f58e92";
      case "rock":
        return "#c5bca4";
      case "steel":
        return "#dad6d6";
    }
  }};
  background-image: url(${pokebola});
  background-repeat: no-repeat;
  background-position: 190px;
`;

export const Img = styled.img`
  width: 193px;
  height: 193px;
  position: absolute;
  top: -70px;
  left: 240px;
`;
export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 95px;
  left: 23px;
  gap: 23px;
`;
export const Dib = styled.div`
  display: flex;
  color: white;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 5px 8px;
  gap: 17px;
  position: absolute;
  width: 99px;
  height: 31px;
  background: ${(props) => {
    switch (props.background) {
      case "grass":
        return "#70B873";
      case "water":
        return "#33A4F5";
      case "poison":
        return "#AD61AE";
      case "flying":
        return "#6892B0";
      case "fire":
        return "#F44900";
      case "bug":
        return "#316520";
      case "normal":
        return "#8A8A8A";
      case "dark":
        return "#5C5365";
      case "dragon":
        return "#0A6CBF";
      case "electric":
        return "#F4D23B";
      case "fairy":
        return "#EC8FE6";
      case "fighting":
        return "#CE4069";
      case "ghost":
        return "#5269AC";
      case "ground":
        return "#D97745";
      case "ice":
        return "#74CEC0";
      case "psychic":
        return "#F67176";
      case "rock":
        return "#C7B78B";
      case "steel":
        return "#BBBBBB";
    }
  }};
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: 9px center;
`;
export const P = styled.p`
  display: flex;
  position: absolute;
  left: 40px;
  top: -9px;
`;
export const P1 = styled.p`
  display: flex;
  position: absolute;
  left: 40px;
  top: -9px;
`;
export const Dib1 = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  align-items: flex-start;
  padding: 5px 8px;
  gap: 17px;
  position: absolute;
  width: 91px;
  height: 31px;
  left: 129px;

  background: ${(props) => {
    switch (props.background) {
      case "grass":
        return "#70B873";
      case "water":
        return "#33A4F5";
      case "poison":
        return "#AD61AE";
      case "flying":
        return "#6892B0";
      case "fire":
        return "#F44900";
      case "bug":
        return "#316520";
      case "normal":
        return "#8A8A8A";
      case "dark":
        return "#5C5365";
      case "dragon":
        return "#0A6CBF";
      case "electric":
        return "#F4D23B";
      case "fairy":
        return "#EC8FE6";
      case "fighting":
        return "#CE4069";
      case "ghost":
        return "#5269AC";
      case "ground":
        return "#D97745";
      case "ice":
        return "#74CEC0";
      case "psychic":
        return "#F67176";
      case "rock":
        return "#C7B78B";
      case "steel":
        return "#BBBBBB";
    }
  }};
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: 9px center;
`;
export const Name = styled.p`
  position: absolute;
  height: 39px;
  left: 20px;
  color: white;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
`;
export const Number = styled.p`
  position: absolute;
  width: 30px;
  height: 19px;
  left: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;
export const Button = styled.button`
  width: 74px;
  height: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  background-color: transparent;
  border: 2px solid transparent;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  position: absolute;
  top: 61px;
  &:hover{
    cursor: pointer;
  };
`;
export const Button1 = styled.button`
  width: 78px;
  height: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0f0f0f;
  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #FF6262;
border-radius: 8px;
  border: 1px solid transparent;
  flex: none;
  order: 1;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50px;
  left: 250px;
  &:hover{
    cursor: pointer;
  };
`;