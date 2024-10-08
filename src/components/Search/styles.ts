import styled from "styled-components";

export const SearchContainer = styled.form`
  margin-top: 3rem;
  margin-left: 10vw;
  margin-right: 10vw;

  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  //border-color: ${props => props.theme['base-border']};
  //background-color: ${props => props.theme['base-post']};
`;

export const TitleSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between
  //padding: 20px;
  //background-color: ${props => props.theme['red-300']};
`;

export const TitleText = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;

export const NumberOfPublications = styled.h2`
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme['base-span']};
`;

export const InputArea = styled.div`
  padding: 0.45rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  border: 0.25rem;
  border: solid;
  color: ${props => props.theme['base-text']};
  border-color: ${props => props.theme['base-border']};
  background-color: ${props => props.theme['base-input']};


  &:hover {
    border-color: ${props => props.theme['blue']};
    transition: border-color 0.2s;
    
  }

  input {
    flex: 1;
    border: none;
    color: ${props => props.theme['base-text']};
    background-color: transparent;

    &::placeholder {
      color: ${(props) => props.theme['base-text']};
      background-color: transparent;
    }
  }

  button {
    padding: 0.25rem;
    border: none;
    border-radius: 0.6rem;
    background-color: ${props => props.theme['base-label']};
    color: ${props => props.theme['white']};

    &:hover {
      background-color: ${props => props.theme['blue']};
    }
  }
`;