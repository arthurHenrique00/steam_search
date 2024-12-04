import {
  useGetAboutGameQuery,
  useGetHeaderImageQuery,
  useGetTitleGameQuery,
  useGetPriceQuery,
  useGetRequirementsQuery
} from '../Services/api'
import { First } from './styled'

const Home = () => {
  const { data: titleData } = useGetTitleGameQuery()
  const { data: aboutData } = useGetAboutGameQuery()
  const { data: headerImage } = useGetHeaderImageQuery()
  const { data: priceData } = useGetPriceQuery()
  const { data: requirementsData } = useGetRequirementsQuery()

  return (
    <>
      <First>
        <div className="banner">
          <h1>{titleData?.name || 'Loading...'}</h1>
          <img src={headerImage?.header_image || ''} alt="Game Header" />
        </div>

        <div className="infos">
          <div className="images-game">
            <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/extras/NGU_EQUIPPED_WITH_IMPROVEMENTS_PT-BR.png?t=1730212296\" />
            <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/extras/NGU_BUILD_YOUR_LEGEND_PT-BR.png?t=1730212296\" />
            <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/extras/NGU_EXPLORE_THE_CITY_OF_FUTURE_PT-BR.png?t=1730212296\" />
          </div>
          <p>{aboutData?.short_description || 'Loading description...'}</p>
          <div className="requirements">
            <span>Preço: {priceData?.price_overview.initial_formatted}</span>
            <div
              dangerouslySetInnerHTML={{
                __html: requirementsData?.pc_requirements.recommended || ''
              }}
            />
          </div>
        </div>
      </First>
    </>
  )
}

export default Home
