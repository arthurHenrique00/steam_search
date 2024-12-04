import {
  useGetAboutGameQuery,
  useGetHeaderImageQuery,
  useGetPriceQuery,
  useGetRequirementsQuery
} from '../Services/api'
import { First, Recommended } from './styled'

const Home = () => {
  const { data: aboutData } = useGetAboutGameQuery()
  const { data: headerImage } = useGetHeaderImageQuery()
  const { data: priceData } = useGetPriceQuery()
  const { data: requirementsData } = useGetRequirementsQuery()

  return (
    <>
      <First>
        <div className="banner">
          <img src={headerImage?.header_image || ''} alt="Game Header" />
        </div>
        <div className="info">
          <div className="images-game">
            <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/extras/NGU_EQUIPPED_WITH_IMPROVEMENTS_PT-BR.png?t=1730212296\" />
            <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/extras/NGU_BUILD_YOUR_LEGEND_PT-BR.png?t=1730212296\" />
            <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/extras/NGU_EXPLORE_THE_CITY_OF_FUTURE_PT-BR.png?t=1730212296\" />
          </div>
          <p>{aboutData?.short_description || 'Loading description...'}</p>
          <div className="requirements">
            <span>{priceData?.price_overview.initial_formatted}</span>
            <div
              dangerouslySetInnerHTML={{
                __html: requirementsData?.pc_requirements.recommended || ''
              }}
            />
          </div>
        </div>
      </First>
      <Recommended>
        <h2>Recomendados</h2>
      </Recommended>
    </>
  )
}

export default Home
