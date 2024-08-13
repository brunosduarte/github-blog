import styled from "styled-components";

export const RepositoriesContainer = styled.div`
  margin-top: 3rem;
  margin-left: 10vw;
  margin-right: 10vw;

  display: grid;
  grid-area: myCards;
  grid-template-areas: "myCards .";
  gap: 2rem;
  //background-color: ${props => props.theme['red-500']};
`;

export const CardContainer = styled.div`
  max-height: 20rem;
  text-overflow: clip;
  overflow: clip;

  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  flex-basis: 1;
  border-radius: 0.75rem;
  border: 0.5rem;
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
  text-overflow: ellipsis;
  padding: 0.75rem;
  font-size: 20px;
  color: ${props => props.theme['base-title']};
`;

export const CardElapsed = styled.div`
  padding: 0.75rem;
  font-size: 14px;
  flex-grow: 1;
  color: ${props => props.theme['base-span']};
`;

export const CardContent = styled.h2`
  padding: 0.75rem;
  font-size: 16px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  color: ${props => props.theme['base-text']};
`;
