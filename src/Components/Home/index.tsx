import { useState } from 'react'
import {
  useGetAboutGameQuery,
  useGetHeaderImageQuery,
  useGetNameGameQuery,
  useGetPriceQuery,
  useGetRequirementsQuery
} from '../Services/api'
import { First, News, Recommended } from './styled'

const useGameData = (id: string) => {
  const { data: about } = useGetAboutGameQuery(id)
  const { data: image } = useGetHeaderImageQuery(id)
  const { data: name } = useGetNameGameQuery(id)
  const { data: price } = useGetPriceQuery(id)
  const { data: requirements } = useGetRequirementsQuery(id)

  return { about, image, name, price, requirements }
}

const games = [
  { id: '21690', label: 're5' },
  { id: '1245620', label: 'elden' },
  { id: '1174180', label: 'rdr2' },
  { id: '1172380', label: 'jedi' },
  { id: '990080', label: 'hog' },
  { id: '1888930', label: 'tlou' },
  { id: '2322010', label: 'rag' },
  { id: '1778820', label: 'tek' }
]

const Home = () => {
  const {
    about: aboutData,
    image: headerImage,
    price: priceData,
    requirements: requirementsData
  } = useGameData('1091500')

  const [showFullDesc, setShowFullDesc] = useState(false)

  const toggleDesc = () => setShowFullDesc(!showFullDesc)

  const getShortDesc = (desc: string) =>
    desc.length > 60 ? `${desc.slice(0, 57)}...` : desc

  return (
    <>
      <First>
        <div className="banner">
          <img src={headerImage?.header_image || ''} alt="Game Header" />
        </div>
        <div className="info">
          <div className="images-game">
            <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/extras/NGU_EQUIPPED_WITH_IMPROVEMENTS_PT-BR.png?t=1730212296" />
            <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/extras/NGU_BUILD_YOUR_LEGEND_PT-BR.png?t=1730212296" />
            <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/extras/NGU_EXPLORE_THE_CITY_OF_FUTURE_PT-BR.png?t=1730212296" />
          </div>
          <p>{aboutData?.short_description || 'Loading description...'}</p>
          <div className="requirements">
            <span id="price">{priceData?.price_overview?.final_formatted}</span>
            <div
              className="pc-requirements"
              dangerouslySetInnerHTML={{
                __html: requirementsData?.pc_requirements?.recommended || ''
              }}
            />
          </div>
        </div>
      </First>

      <Recommended>
        <h2>Recomendados</h2>
        <div className="games">
          {games.map(({ id, label }) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { about, image, name, price } = useGameData(id)

            return (
              <div className="games-item" key={label}>
                <img src={image?.capsule_image || ''} alt={name?.name || ''} />
                <h2>{name?.name}</h2>
                <p onClick={toggleDesc}>
                  {showFullDesc
                    ? about?.short_description || 'Loading description...'
                    : getShortDesc(about?.short_description || '')}
                </p>
                <span id="price">
                  {price?.price_overview?.final_formatted || 'N/A'}
                </span>
              </div>
            )
          })}
        </div>
      </Recommended>

      <News>
        <div className="news-item">
          <img src="" alt="" />
          <h2></h2>
          <span id="price"></span>
        </div>
      </News>
    </>
  )
}

export default Home
