import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { Followers, GithubProfile, FullName, InfoArea, LinkToGithub, ProfileContainer, ProfilePicture, WorksOn, BioDescription, ProfileInfo } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>

      <ProfilePicture />

      <ProfileInfo>
        <FullName>
          Bruno Duarte
          <LinkToGithub>
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </LinkToGithub>

        </FullName>
        
        <BioDescription>
        Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
        </BioDescription>

        <InfoArea>
          <GithubProfile>
            <FontAwesomeIcon icon={faGithub} />
            brunosduarte
          </GithubProfile>

          <WorksOn>
            <FontAwesomeIcon icon={faBuilding} />
            Engenhação
          </WorksOn>

          <Followers>
            <FontAwesomeIcon icon={faUserGroup} />
            33 followers
          </Followers>
        </InfoArea>

      </ProfileInfo>
      
      

    </ProfileContainer>
  )
}


// <FontAwesomeIcon icon={faComment} />
// <FontAwesomeIcon icon={faChevronLeft} />
// <FontAwesomeIcon icon={faCalendarDay} />