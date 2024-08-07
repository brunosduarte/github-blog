import styled from "styled-components";

export const ProfileContainer = styled.div`
  margin-top: 200px;
  margin-left: 100px;
  padding: 20px;
  width: calc(100vw - 20%);
  
  display: grid;
  grid: 150px / auto auto auto;

  border-color: ${props => props.theme['base-border']};

  background-color: ${props => props.theme['base-post']};


  border-radius: 10px;
`;

export const ProfilePicture = styled.div`
  //padding: 20px;
  width: 144px;
  background-image: url("./src/assets/avatar.png");
  background-repeat: no-repeat;
  border-radius: 9px;
  //background-color: ${props => props.theme['red-300']};
`;

export const ProfileInfo = styled.div`
  margin-left: 20px;
  justify-content: center;
  align-content: center;
`;

export const FullName = styled.h1`
  //background-color: ${props => props.theme['blue']};
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

export const LinkToGithub = styled.button`
  font-size: 12px;
  justify-content: center;
  color: ${props => props.theme['blue']};
  background-color: transparent;
  border: none;
  
  &:hover {
    border-bottom: 2px;
    border-color: blue;
    transition: background-color 0.2s;
    cursor: pointer;
  }
`;

export const BioDescription = styled.h2`
  //background-color: ${props => props.theme['red-300']};
  margin-top: 5px;
  font-size: 14px;

`;

export const InfoArea = styled.div`
  //background-color: ${props => props.theme['red-500']};
  margin-top: 20px;
  display: flex;
  flex-direction: wrap;
  justify-content: left;
  gap: 30px;
`;

export const GithubProfile = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 5px;
`;

export const WorksOn = styled.div`
  //background-color: ${props => props.theme['red-300']};
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 5px;
`;

export const Followers = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 5px;
`;

