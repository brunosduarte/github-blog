import styled from "styled-components";

export const IssuesContainer = styled.div`
  margin-top: 3rem;
  margin-left: 10vw;
  margin-right: 10vw;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  //background-color: ${props => props.theme['red-700']};
`;

export const CardContainer = styled.div`
  max-height: 20rem;
  min-width: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;

  padding: 0.75rem;

  break-inside: avoid-page;
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
  align-items: center;
  display: flex;
  justify-content: space-between;
//
  //background-color: ${props => props.theme["blue"]};
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
  text-align: right;
//
  color: ${props => props.theme['base-span']};
  //background-color: ${props => props.theme['red-300']}
`;

export const CardContent = styled.h2`
  font-size: 16px;
  padding: 0.75rem;

  //text-overflow: ellipsis;
  //padding-bottom: 50px;

  color: ${props => props.theme['base-text']};
`;
