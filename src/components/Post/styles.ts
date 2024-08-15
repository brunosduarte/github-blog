import styled from "styled-components";

export const PostPage = styled.div`
  margin-top: 3rem;
  margin-left: 10vw;
  margin-right: 10vw;

  align-items: center;
  justify-content: center;
  //background-color: ${props => props.theme['red-300']};
  `;

export const PostContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  gap: 1rem;

  border-color: ${props => props.theme['base-border']};
  background-color: ${props => props.theme['base-post']};
  border-radius: 0.75rem;
`;

export const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  justify-content: space-between;
  align-content: center;
  //background-color: ${props => props.theme['red-300']};
`;

export const PostTitle = styled.h1`
  color: ${props => props.theme['base-title']};
  font-size: 24px;
  font-weight: bold;
  min-width: 100%;
  justify-content: flex-start;
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

export const InfoArea = styled.div`
  margin-top: 1.5rem;
  display: flex;
  font-size: 16px;
  flex-direction: wrap;
  justify-content: flex-start;
  min-width: 100%;
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

export const PostBody = styled.h1`
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 14px;
  font-weight: normal;
  align-content: flex-start;
  justify-content: flex-start;
  white-space: pre-wrap;
  line-height: 1.25rem;
  color: ${props => props.theme['base-title']};
`;
