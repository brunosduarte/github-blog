import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { BackButton, Comments, ElapsedTime, GithubProfile, PostHeader, InfoArea, LinkToGithub, PostBody, PostContainer, PostTitle, PostPage } from "./styles";
import { useContextSelector } from 'use-context-selector';
import { FetchContext } from '@/contexts/FetchContext';
import Markdown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns';
import { ReactNode } from 'react';

interface PostProps {
  children: ReactNode;
}
export function Post({ children }: PostProps) {  
  const issues = useContextSelector(FetchContext, (context) => {
    return context.issues
  })

  console.log('issues',issues)
  console.log('children',children)

  return (
    <PostPage>
      <PostContainer>
        <PostHeader>
          <BackButton>
            <FontAwesomeIcon icon={faChevronLeft} />
            &nbsp; BACK 
          </BackButton>
          <LinkToGithub>
            SEE ON GITHUB &nbsp;
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
              {` {formatDistanceToNow(issues[1].created_at, { addSufix: true })} `}
            </ElapsedTime>
            <Comments>
              <FontAwesomeIcon icon={faComment} />
              {`{issues[4].comments}`} comments
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