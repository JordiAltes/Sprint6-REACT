import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url("${(props) => props.background}");
`;

export const Button = styled.p`
  flex-grow: 1;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Open Sans", sans-serif;
  border: 5px solid red;
  display: inline-block;
  font-size: large;
  margin: 1px;
  text-align: center;

  &:hover {
    background-color: #bad7e9;
  }

  &:active {
    box-shadow: 0 2px #666;
    transform: translateY(4px);
  }
`;

export const ContainerButton = styled.div`
  display: flex;
`;
