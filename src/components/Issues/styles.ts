import styled from "styled-components";

export const IssuesContainer = styled.div`
  margin-top: 2.5rem;
  margin-left: 10vw;
  margin-right: 10vw;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  //background-color: ${props => props.theme['red-700']};
`;

export const CardContainer = styled.button`
  max-height: 20rem;
  min-width: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;
  
  padding: 1rem;

  border-radius: 0.75rem;
  border: 0.15rem;
  border-style: solid;

  justify-content: space-evenly;
  align-items: center;

  background-color: ${props => props.theme['base-post']};
  border-color: ${props => props.theme['base-post']};
  transition: border-color 0.5s;
  
  &:hover {
    transition: background-color 0.2s;
    cursor: pointer;
    border-color: ${props => props.theme['base-label']};
  }
`;

export const CardTitleAndElapsed = styled.div`
  align-items: baseline;
  display: flex;
  flex: 1;
  justify-content: space-between;
  //background-color: ${props => props.theme["blue"]};
`;

export const CardTitle = styled.h1`
  text-overflow: ellipsis;
  padding: 0.75rem;
  font-size: 20px;
  color: ${props => props.theme['base-title']};
`;

export const CardElapsed = styled.div`
  display: flex;
  flex: 1;
  padding: 0.75rem;
  font-size: 14px;
  text-align: right;
  //align-items: self-start;

  color: ${props => props.theme['base-span']};
  //background-color: ${props => props.theme['red-700']}
`;

export const CardContent = styled.h2`
  font-size: 16px;
  display: flex;
  text-align: left;
  padding: 0.75rem;
  overflow-x: hidden;
  overflow-y: hidden;

  //background-color: ${props => props.theme['red-300']};
  color: ${props => props.theme['base-text']};
`;
