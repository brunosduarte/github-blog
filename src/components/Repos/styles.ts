import styled from "styled-components";

export const ReposContainer = styled.div`
  margin-top: 20px;
  //padding: 20px;
  display: grid;
  grid-area: myCards;
  grid-template-areas: myCards myCards;
  gap: 10px;
  background-color: ${props => props.theme['red-500']};
`;

export const CardContainer = styled.div`
  margin-top: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-basis: 1;
  border-radius: 10px;
  background-color: ${props => props.theme['base-post']};
  border-color: ${props => props.theme['base-border']};

  &:hover {
    border: 10px;
    border-color: blue;
    transition: background-color 0.2s;
    cursor: pointer;
  }
`;

export const CardTitleAndElapsed = styled.div`
  display: flex;
  justify-content: space-between;
  //flex-direction: row;
  //padding: 20px;
  //background-color: ${props => props.theme['red-700']};
`;

export const CardTitle = styled.h1`
  margin-left: 20px;
  font-size: 24px;
  justify-content: center;
  align-content: center;
`;

export const CardElapsed = styled.div`
  flex-shrink: 1;
  flex-wrap: nowrap;
  //background-color: ${props => props.theme['red-300']};
`;

export const CardContent = styled.h2`
  //background-color: ${props => props.theme['blue']};
  font-size: 12px;
  display: flex;
  align-content: center;
  justify-content: space-between;
`;
