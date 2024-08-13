import styled from "styled-components";

export const PostContainer = styled.div`
  margin-top: 3rem;
  margin-left: 10vw;
  margin-right: 10vw;
  padding: 1.5rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  gap: 1rem;

  border-color: ${props => props.theme['base-border']};
  background-color: ${props => props.theme['base-post']};
  border-radius: 0.75rem;
`;

export const PostHeader = styled.div`
  justify-content: center;
  align-content: center;
`;

export const PostTitle = styled.h1`
  display: flex;
  align-content: center;
  justify-content: space-between;
  color: ${props => props.theme['base-title']};
`;

export const BackButton = styled.a`
  font-size: 12px;
  justify-content: center;
  align-content: center;
  color: ${props => props.theme['blue']};
  border: 0.1rem; 
  background-color: transparent;
  border-style: solid;
  border-color: transparent;
  text-decoration: none;
  gap: 0.5rem;
  
  &:hover {
    border-color: ${props => props.theme['blue']};;
    line-height: 0;
    transition: background-color 0.2s;
    cursor: pointer;
  }
`;

export const LinkToGithub = styled.a`
  font-size: 12px;
  justify-content: center;
  align-content: center;
  color: ${props => props.theme['blue']};
  border: 0.1rem; 
  background-color: transparent;
  border-style: solid;
  border-color: transparent;
  text-decoration: none;
  gap: 0.5rem;
  
  &:hover {
    border-color: ${props => props.theme['blue']};;
    line-height: 0;
    transition: background-color 0.2s;
    cursor: pointer;
  }
`;

export const PostBody = styled.h1`
  display: flex;
  align-content: center;
  justify-content: space-between;
  color: ${props => props.theme['base-title']};
`;


export const InfoArea = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: wrap;
  justify-content: left;
  gap: 2rem;
  color: ${props => props.theme['base-subtitle']};
  `;

export const GithubProfile = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 0.4rem;
`;

export const ElapsedTime = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 0.4rem;
`;

export const Comments = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 0.4rem;
`;
