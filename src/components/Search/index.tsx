import { useContextSelector } from "use-context-selector";
import { NumberOfPublications, TitleText, SearchContainer, TitleSearch, InputArea } from "./styles";
import { FetchContext } from "@/contexts/FetchContext";
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Search() {
  const fetchIssues = useContextSelector(
    FetchContext,
    (context) => {
      return context.fetchIssues
    }
  )

  const publications = fetchIssues.length

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchIssues(data.query)
  }
  
  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <TitleSearch>
        <TitleText>Publications</TitleText>
        <NumberOfPublications>{publications} publications</NumberOfPublications>
      </TitleSearch>
      
      <InputArea>
        <input 
          type="text"
          placeholder="Search content"
          {...register('query')}
        />
        <button type="submit" disabled={isSubmitting} >
          Search
        </button>
      </InputArea>
    </SearchContainer>
  )
}

