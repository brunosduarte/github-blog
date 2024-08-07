import styled from "styled-components";

export const ReposContainer = styled.div`
  margin-top: 20px;
  //padding: 20px;
  display: grid;
  grid-area: myCards;
  flex-wrap: wrap;
  grid-template-areas: "myCards .";
  gap: 10px;
  //background-color: ${props => props.theme['red-500']};
`;

export const CardContainer = styled.div`
  //margin-top: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-basis: 1;
  border-radius: 10px;
  border: 2px;
  border-style: solid;
  background-color: ${props => props.theme['base-post']};
  border-color: ${props => props.theme['base-post']};
  transition: border-color 0.5s;
  
  &:hover {
    transition: background-color 0.2s;
    cursor: pointer;
    border-color: ${props => props.theme['base-text']};
  }
`;

export const CardTitleAndElapsed = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardTitle = styled.h1`
  margin-left: 20px;
  font-size: 20px;
  color: ${props => props.theme['base-title']};
  justify-content: center;
  align-content: center;
`;

export const CardElapsed = styled.div`
  font-size: 12px;
  flex-grow: 1;
  color: ${props => props.theme['base-span']};
`;

export const CardContent = styled.h2`
  font-size: 12px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  color: ${props => props.theme['base-text']};
  //background-color: ${props => props.theme['blue']};
`;
