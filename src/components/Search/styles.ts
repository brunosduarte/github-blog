import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-top: 20px;
  //margin-left: 100px;
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
  padding: 8px;
  margin-top: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-content: center;
  border: 1px;
  border: solid;
  border-color: ${props => props.theme['base-border']};
  background-color: ${props => props.theme['base-input']};

  &:hover {
    border-color: ${props => props.theme['base-label']};
    transition: border-color 0.2s;
    
  }
`;
