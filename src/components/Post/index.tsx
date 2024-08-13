import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { BackButton, Comments, ElapsedTime, GithubProfile, PostHeader, InfoArea, LinkToGithub, PostBody, PostContainer, PostTitle } from "./styles";
import { useContextSelector } from 'use-context-selector';
import { FetchContext } from '../../contexts/FetchContext';

export function Post() {  
  const post = useContextSelector(FetchContext, (context) => {
    return context.repositories
  })

  console.log(post)

  return (
    <>
      <PostContainer>
        <PostHeader>
          <BackButton>
            &nbsp; VOLTAR 
            <FontAwesomeIcon icon={faChevronLeft} />
          </BackButton>
          <LinkToGithub>
            VER NO GITHUB &nbsp;
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </LinkToGithub>

          <PostTitle>
            {`post.id.title`}
          </PostTitle>

          <InfoArea>
            <GithubProfile>
              <FontAwesomeIcon icon={faGithub} />
              {`post?.user.login`}
            </GithubProfile>
            <ElapsedTime>
              <FontAwesomeIcon icon={faCalendarDay} />
              {`post?.created_at`}
            </ElapsedTime>
            <Comments>
              <FontAwesomeIcon icon={faComment} />
              {`post?.comments`} seguidores
            </Comments>
          </InfoArea>
        </PostHeader>
        <PostBody>
          {`post?.body`}
        </PostBody>
      </PostContainer>
    </> 
  )
}