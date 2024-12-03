import styled from 'styled-components'

const first_bg =
  'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/extras/ER_Steam_Gif_616x260.gif?t=1726158298'

export const First = styled.div`
  padding: 44px;
  margin: 0 auto;
  background-image: ${first_bg};
  background-repeat: no-repeat;
  background-size: cover;
  width: 850px;
  border-radius: 22px;
  display: block;

  h2 {
    margin-bottom: 12px;
    color: white;
  }

  img {
    border-radius: 9px;
  }
`
