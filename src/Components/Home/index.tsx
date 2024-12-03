import {
  useGetAboutGameQuery,
  useGetHeaderImageQuery,
  useGetTitleGameQuery,
  useGetBackgroundImageQuery
} from '../Services/api'
import { First } from './styled'

const Home = () => {
  const { data: titleData } = useGetTitleGameQuery()
  const { data: aboutData } = useGetAboutGameQuery()
  const { data: headerImage } = useGetHeaderImageQuery()
  const { data: backgroundImage } = useGetBackgroundImageQuery()

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage?.background_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: '#fff'
      }}
    >
      <First>
        <h1>{titleData?.title || 'Loading...'}</h1>
        <img src={headerImage?.header_image || ''} alt="Game Header" />
        <p>{aboutData?.about || 'Loading description...'}</p>
      </First>
    </div>
  )
}

export default Home
