import steam_logo from '../../img/steam_logo.png'
import search_logo from '../../img/bloom.png'
import { HeaderStyled } from './style'
import steamid_logo from '../../img/steamid.png'

const Header = () => (
  <HeaderStyled>
    <div className="first-header">
      <img src={steam_logo} />
      <label htmlFor="search">Digite o ID do perfil:</label>
      <input id="search" />
      <button type="submit">
        <img src={search_logo} />
      </button>
    </div>
    <div className="steamid">
      <i>Se não souber o steam id se o SteamID I/O</i>
      <a href="https://steamid.io/lookup" target="_blank" rel="noreferrer">
        <img src={steamid_logo} />
      </a>
    </div>
  </HeaderStyled>
)

export default Header
