import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-top: 50px;
  margin-left: 100px;
  padding: 20px;
  
  display: flex;
  flex-direction: column;
  border-color: ${props => props.theme['base-border']};
  background-color: ${props => props.theme['base-post']};


  border-radius: 10px;
`;

export const TitleSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between
  //padding: 20px;
  //background-color: ${props => props.theme['red-300']};
`;

export const InputSearch = styled.input`
  margin-top: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-content: center;
  border: 2px;
  border-color: ${props => props.theme['base-border']};
  background-color: ${props => props.theme['base-input']};
`;
