import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Followers, GithubProfile, FullName, InfoArea, LinkToGithub, ProfileContainer, ProfilePicture, WorksOn, BioDescription, ProfileInfo } from "./styles";
import { useContextSelector } from 'use-context-selector';
import { RepositoriesContext } from '../../contexts/FetchContext';

interface Profile {
  name: string,
  username: string,
  description: string,
  worksOn: string,
  followers: number
}
export function Profile() {  
  const profile = useContextSelector(RepositoriesContext, (context) => {
    return context.profile
  })

  console.log('ok', profile)
  
  return (
    <>
      <ProfileContainer>
        <ProfilePicture>
          {`profile.username`}
        </ProfilePicture>
        <ProfileInfo>
          <FullName>
            {`profile.name`}
          </FullName>
          <LinkToGithub>
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </LinkToGithub>
          <BioDescription>
            {`profile.description`}
          </BioDescription>
          <InfoArea>
            <GithubProfile>
              <FontAwesomeIcon icon={faGithub} />
              {`profile.username`}
            </GithubProfile>
            <WorksOn>
              <FontAwesomeIcon icon={faBuilding} />
              {`profile.worksOn`}
            </WorksOn>
            <Followers>
              <FontAwesomeIcon icon={faUserGroup} />
                {`profile.followers`}
            </Followers>
          </InfoArea>
        </ProfileInfo>
      </ProfileContainer>
    </> 
  )
}

// <FontAwesomeIcon icon={faComment} />
// <FontAwesomeIcon icon={faChevronLeft} />
// <FontAwesomeIcon icon={faCalendarDay} />