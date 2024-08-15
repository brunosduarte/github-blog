import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Followers, GithubProfile, FullName, InfoArea, LinkToGithub, ProfileContainer, WorksOn, BioDescription, ProfileInfo, ProfileAvatar } from "./styles";
import { useContextSelector } from 'use-context-selector';
import { FetchContext } from '../../contexts/FetchContext';

export function Profile() {  
  const profile = useContextSelector(FetchContext, (context) => {
    return context.profile
  })

  return (
    <>
      <ProfileContainer>
        <ProfileAvatar src={profile?.avatar_url} alt="" />
        <ProfileInfo>
          <FullName>
            {profile?.name}
            <LinkToGithub href={`https://github.com/${profile?.login}`} >
              GITHUB &nbsp;
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </LinkToGithub>
          </FullName>

          <BioDescription>
            {profile?.bio}
          </BioDescription>
          
          <InfoArea>
            <GithubProfile>
              <FontAwesomeIcon icon={faGithub} />
              {profile?.login}
            </GithubProfile>
            <WorksOn>
              <FontAwesomeIcon icon={faBuilding} />
              {profile?.company}
            </WorksOn>

            <Followers>
              <FontAwesomeIcon icon={faUserGroup} />
              {profile?.followers} followers
            </Followers>
          </InfoArea>
        </ProfileInfo>
      </ProfileContainer>
    </> 
  )
}
