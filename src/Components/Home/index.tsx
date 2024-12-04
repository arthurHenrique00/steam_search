import {
  useGetAboutGameQuery,
  useGetHeaderImageQuery,
  useGetNameGameQuery,
  useGetPriceQuery,
  useGetRequirementsQuery
} from '../Services/api'
import { First, Recommended } from './styled'

const Home = () => {
  const { data: aboutData } = useGetAboutGameQuery('1091500')
  const { data: headerImage } = useGetHeaderImageQuery('1091500')
  const { data: priceData } = useGetPriceQuery()
  const { data: requirementsData } = useGetRequirementsQuery('1091500')

  const { data: re5Img } = useGetHeaderImageQuery('21690')
  const { data: re5Title } = useGetNameGameQuery('21690')
  const { data: re5About } = useGetAboutGameQuery('21690')

  const { data: eldenImg } = useGetHeaderImageQuery('1245620')
  const { data: eldenTitle } = useGetNameGameQuery('1245620')
  const { data: eldenAbout } = useGetAboutGameQuery('1245620')

  const { data: rdr2Img } = useGetHeaderImageQuery('1174180')
  const { data: rdr2Title } = useGetNameGameQuery('1174180')
  const { data: rdr2About } = useGetAboutGameQuery('1174180')

  const { data: jediImg } = useGetHeaderImageQuery('1172380')
  const { data: jediTitle } = useGetNameGameQuery('1172380')
  const { data: jediAbout } = useGetAboutGameQuery('1172380')

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
            <span>{priceData?.price_overview.final_formatted}</span>
            <div
              className="pc-requirements"
              dangerouslySetInnerHTML={{
                __html: requirementsData?.pc_requirements.recommended || ''
              }}
            />
          </div>
        </div>
      </First>
      <Recommended>
        <h2>Recomendados</h2>
        <div className="games">
          <div className="games-item">
            <img src={re5Img?.capsule_image} />
            <h2>{re5Title?.name}</h2>
            <p>{re5About?.short_description}</p>
          </div>
          <div className="games-item">
            <img src={jediImg?.capsule_image} />
            <h2>{jediTitle?.name}</h2>
            <p>{jediAbout?.short_description}</p>
          </div>
          <div className="games-item">
            <img src={eldenImg?.capsule_image} />
            <h2>{eldenTitle?.name}</h2>
            <p>{eldenAbout?.short_description}</p>
          </div>
          <div className="games-item">
            <img src={rdr2Img?.capsule_image} />
            <h2>{rdr2Title?.name}</h2>
            <p>{rdr2About?.short_description}</p>
          </div>
        </div>
      </Recommended>
    </>
  )
}

export default Home
