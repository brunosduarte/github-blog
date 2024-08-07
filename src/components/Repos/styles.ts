import styled from "styled-components";

export const ReposContainer = styled.div`
  margin-top: 10px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  //background-color: ${props => props.theme['red-500']};
`;

export const CardContainer = styled.div`
  margin-top: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
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
  flex-direction: row;
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
  width: 200px;
  //background-color: ${props => props.theme['red-300']};
`;

export const CardContent = styled.h2`
  //background-color: ${props => props.theme['blue']};
  font-size: 12px;
  display: flex;
  align-content: center;
  justify-content: space-between;
`;
