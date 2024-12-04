import styled from 'styled-components'

const cyber_bg =
  'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/page.bg.jpg?t=1730212296'

export const First = styled.div`
  padding: 22px;
  margin: 0 auto;
  position: relative;
  width: 1200px;
  border-radius: 22px;
  display: flex;
  color: black;
  align-items: center;
  font-weight: bold;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${cyber_bg});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }

  img {
    border-radius: 12px;
  }

  .info {
    display: block;
    margin-left: 32px;

    ul {
      list-style: none;
    }

    .images-game {
      display: flex;
      width: 150px;
      height: 70px;

      img {
        margin-right: 22px;
        transition: transform 0.2s;

        &:hover {
          transform: scale(1.3);
        }
      }
    }

    p {
      padding: 32px 0;
    }

    .requirements {
      display: flex;
      align-items: center;

      span {
        margin-right: 22px;
        background-color: green;
        padding: 12px;
        border-radius: 12px;
        color: white;
        transition: transform 0.2s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`

export const Recommended = styled.div`
  padding: 64px;
  color: white;
`
