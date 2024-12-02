import steam_logo from '../../img/steam_logo.png'
import search_logo from '../../img/bloom.png'
import { HeaderStyled } from './style'

const Header = () => (
  <HeaderStyled>
    <img src={steam_logo} />
    <label htmlFor="search">Digite o ID do perfil:</label>
    <input id="search" />
    <button type="submit">
      <img src={search_logo} />
    </button>
  </HeaderStyled>
)

export default Header
