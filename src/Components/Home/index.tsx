import {
  useGetAboutGameQuery,
  useGetHeaderImageQuery,
  useGetTitleGameQuery
} from '../Services/api'
import { First } from './styled'

const Home = () => {
  const { data: titleData } = useGetTitleGameQuery()
  const { data: aboutData } = useGetAboutGameQuery()
  const { data: headerImage } = useGetHeaderImageQuery()

  return (
    <>
      <First>
        <h1>{titleData?.name || 'Loading...'}</h1>
        <img src={headerImage?.header_image || ''} alt="Game Header" />
        <p>{aboutData?.short_description || 'Loading description...'}</p>
      </First>
    </>
  )
}

export default Home
