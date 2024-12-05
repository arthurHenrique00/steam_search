import { useState } from 'react'
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
  const { data: priceData } = useGetPriceQuery('1091500')
  const { data: requirementsData } = useGetRequirementsQuery('1091500')

  const { data: re5Img } = useGetHeaderImageQuery('21690')
  const { data: re5Title } = useGetNameGameQuery('21690')
  const { data: re5About } = useGetAboutGameQuery('21690')
  const { data: re5Price } = useGetPriceQuery('21690')

  const { data: eldenImg } = useGetHeaderImageQuery('1245620')
  const { data: eldenTitle } = useGetNameGameQuery('1245620')
  const { data: eldenAbout } = useGetAboutGameQuery('1245620')
  const { data: eldenPrice } = useGetPriceQuery('1245620')

  const { data: rdr2Img } = useGetHeaderImageQuery('1174180')
  const { data: rdr2Title } = useGetNameGameQuery('1174180')
  const { data: rdr2About } = useGetAboutGameQuery('1174180')
  const { data: rdr2Price } = useGetPriceQuery('1174180')

  const { data: jediImg } = useGetHeaderImageQuery('1172380')
  const { data: jediTitle } = useGetNameGameQuery('1172380')
  const { data: jediAbout } = useGetAboutGameQuery('1172380')
  const { data: jediPrice } = useGetPriceQuery('1172380')

  const { data: hogImg } = useGetHeaderImageQuery('990080')
  const { data: hogTitle } = useGetNameGameQuery('990080')
  const { data: hogAbout } = useGetAboutGameQuery('990080')
  const { data: hogPrice } = useGetPriceQuery('990080')

  const { data: tlouImg } = useGetHeaderImageQuery('1888930')
  const { data: tlouTitle } = useGetNameGameQuery('1888930')
  const { data: tlouAbout } = useGetAboutGameQuery('1888930')
  const { data: tlouPrice } = useGetPriceQuery('1888930')

  const { data: ragImg } = useGetHeaderImageQuery('2322010')
  const { data: ragTitle } = useGetNameGameQuery('2322010')
  const { data: ragAbout } = useGetAboutGameQuery('2322010')
  const { data: ragPrice } = useGetPriceQuery('2322010')

  const { data: tekImg } = useGetHeaderImageQuery('1778820')
  const { data: tekTitle } = useGetNameGameQuery('1778820')
  const { data: tekAbout } = useGetAboutGameQuery('1778820')
  const { data: tekPrice } = useGetPriceQuery('1778820')

  const hog_desc = hogAbout?.short_description || ''
  const elden_desc = eldenAbout?.short_description || ''
  const rdr2_desc = rdr2About?.short_description || ''
  const tek_desc = tekAbout?.short_description || ''
  const rag_desc = ragAbout?.short_description || ''
  const tlou_desc = tlouAbout?.short_description || ''
  const re5_desc = re5About?.short_description || ''
  const jedi_desc = jediAbout?.short_description || ''

  const [showFullDesc, setShowFullDesc] = useState(false)

  const getDes = (desc: string) => {
    if (desc.length > 60) {
      return desc.slice(0, 57) + '...'
    }
    return desc
  }

  const toggleDesc = () => {
    setShowFullDesc(!showFullDesc)
  }

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
            <span id="price">{priceData?.price_overview.final_formatted}</span>
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
            <p onClick={toggleDesc}>
              {showFullDesc ? re5_desc : getDes(re5_desc)}
            </p>
            <span id="price">{re5Price?.price_overview.final_formatted}</span>
          </div>
          <div className="games-item">
            <img src={jediImg?.capsule_image} />
            <h2>{jediTitle?.name}</h2>
            <p onClick={toggleDesc}>
              {showFullDesc ? jedi_desc : getDes(jedi_desc)}
            </p>
            <span id="price">{jediPrice?.price_overview.final_formatted}</span>
          </div>
          <div className="games-item">
            <img src={eldenImg?.capsule_image} />
            <h2>{eldenTitle?.name}</h2>
            <p onClick={toggleDesc}>
              {showFullDesc ? elden_desc : getDes(elden_desc)}
            </p>
            <span id="price">{eldenPrice?.price_overview.final_formatted}</span>
          </div>
          <div className="games-item">
            <img src={rdr2Img?.capsule_image} />
            <h2>{rdr2Title?.name}</h2>
            <p onClick={toggleDesc}>
              {showFullDesc ? rdr2_desc : getDes(rdr2_desc)}
            </p>
            <span id="price">{rdr2Price?.price_overview.final_formatted}</span>
          </div>
        </div>
        <h2>Últimos Lançamentos</h2>
        <div className="games">
          <div className="games-item">
            <img src={hogImg?.capsule_image} />
            <h2>{hogTitle?.name}</h2>
            <p onClick={toggleDesc}>
              {showFullDesc ? hog_desc : getDes(hog_desc)}
            </p>
            <span id="price">{hogPrice?.price_overview.final_formatted}</span>
          </div>
          <div className="games-item">
            <img src={tlouImg?.capsule_image} />
            <h2>{tlouTitle?.name}</h2>
            <p onClick={toggleDesc}>
              {showFullDesc ? tlou_desc : getDes(tlou_desc)}
            </p>
            <span id="price">{tlouPrice?.price_overview.final_formatted}</span>
          </div>
          <div className="games-item">
            <img src={ragImg?.capsule_image} />
            <h2>{ragTitle?.name}</h2>
            <p onClick={toggleDesc}>
              {showFullDesc ? rag_desc : getDes(rag_desc)}
            </p>
            <span id="price">{ragPrice?.price_overview.final_formatted}</span>
          </div>
          <div className="games-item">
            <img src={tekImg?.capsule_image} alt={tekTitle?.name} />
            <h2>{tekTitle?.name}</h2>
            <p onClick={toggleDesc}>
              {showFullDesc ? tek_desc : getDes(tek_desc)}
            </p>
            <span id="price">{tekPrice?.price_overview.final_formatted}</span>
          </div>
        </div>
      </Recommended>
    </>
  )
}

export default Home
