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
          Cameron Wyatt
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
            <FontAwesomeIcon icon={faGithub} color='base-label' />
            brunosduarte
          </GithubProfile>

          <WorksOn>
            <FontAwesomeIcon icon={faBuilding} color='base-label' />
            Engenhação
          </WorksOn>

          <Followers>
            <FontAwesomeIcon icon={faUserGroup} color='base-label' />
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