import { FooterStyled } from './style'
import steam_logo from '../../img/steam_footer_logo.png'

const Footer = () => (
  <FooterStyled>
    <ul>
      <li>
        <a href="">Recomendados</a>
      </li>
      <li>
        <a href="">Recentes</a>
      </li>
      <li>
        <a href="">Novidades</a>
      </li>
    </ul>
    <div className="infos-footer">
      <img src={steam_logo} />
      <p>
        - Steam Search Profile - Todos os direitos reservados &copy; Arthur
        Henrique Costa de Lima
      </p>
    </div>
  </FooterStyled>
)

export default Footer
