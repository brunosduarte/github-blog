import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { BackButton, Comments, ElapsedTime, GithubProfile, PostHeader, InfoArea, LinkToGithub, PostBody, PostContainer, PostTitle, PostPage } from "./styles";
import { useContextSelector } from 'use-context-selector';
import { FetchContext } from '../../contexts/FetchContext';
import Markdown from 'react-markdown'

export function Post() {  
  const issues = useContextSelector(FetchContext, (context) => {
    return context.issues
  })

  console.log(issues)

  return (
    <PostPage>
      <PostContainer>
        <PostHeader>
          <BackButton>
            <FontAwesomeIcon icon={faChevronLeft} />
            &nbsp; VOLTAR 
          </BackButton>
          <LinkToGithub>
            VER NO GITHUB &nbsp;
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </LinkToGithub>
        </PostHeader>

          <PostTitle>
            {`{issues[1].title}`}
          </PostTitle>

          <InfoArea>
            <GithubProfile>
              <FontAwesomeIcon icon={faGithub} />
              {`{issues[1].user.login}`}
            </GithubProfile>
            <ElapsedTime>
              <FontAwesomeIcon icon={faCalendarDay} />
              {/* elapsedTime.format(new Date(issues[1].created_at)) */}
              {`Há 3 dias`}
            </ElapsedTime>
            <Comments>
              <FontAwesomeIcon icon={faComment} />
              {`{issues[1].comments}`} comentários
            </Comments>
          </InfoArea>
        
      </PostContainer>

      <PostBody>
        <Markdown>
          {`{issues[1].body}`}
        </Markdown>
      </PostBody>
    </PostPage> 
  )
}