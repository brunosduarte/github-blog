import styled from "styled-components";

export const ProfileContainer = styled.div`
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

export const ProfileAvatar = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 0.75rem;
`;

export const ProfileInfo = styled.div`
  justify-content: center;
  align-content: center;
`;

export const FullName = styled.h1`
  display: flex;
  align-content: center;
  justify-content: space-between;
  color: ${props => props.theme['base-title']};
`;

export const LinkToGithub = styled.a`
  font-size: 12px;
  justify-content: center;
  align-content: center;
  color: ${props => props.theme['blue']};
  //background-color: transparent;
  text-decoration: none;
  gap: 0.5rem;
  border: 0.1rem; 
  border-style: solid;
  border-color: transparent;
  
  &:hover {
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-color: ${props => props.theme['blue']};;
    line-height: 0;
    transition: background-color 0.2s;
    cursor: pointer;
  }
`;

export const BioDescription = styled.h2`
  margin-top: 0.75rem;
  font-size: 14px;
  color: ${props => props.theme['base-text']};
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

export const WorksOn = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 0.4rem;
`;

export const Followers = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 0.4rem;
`;
