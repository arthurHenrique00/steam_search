import styled from 'styled-components'
import background_game from '../../img/games-bg.jpg'

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

      .pc-requirements {
        padding: 12px;
        border: 2px solid gray;
        border-radius: 4px;
      }
    }
  }
`

export const Recommended = styled.div`
  display: block;

  color: white;
  width: 100%;

  > h2 {
    margin: 32px 64px;
  }

  .games {
    display: flex;
    justify-content: center;
    margin-bottom: 120px;

    .games-item {
      border: 1px solid gray;
      border-radius: 3px;
      text-align: center;
      background-image: url(${background_game});
      background-repeat: no-repeat;
      background-size: cover;
      transition: transform 0.2s;
      margin-right: 22px;
      width: 300px;
      padding: 18px;
      overflow: hidden;
      position: relative;

      h2 {
        padding: 22px;
      }

      p{
      margin-bottom: 22px;
      cursor: pointer;
      }

      .expanded {
      white-space: normal;
      }

      #price {
      margin: auto;
      }

      &::before {
        content: '';
        position: absolute;
        top: -100px;
        left: -100px;
        width: 200%;
        height: 150px;
        background: linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.4),
          rgba(255, 255, 255, 0)
        );
        transform: translate(0, 0);
        transition: transform 0.5s ease;
        z-index: 1;
      }

      &:hover {
        transform: scale(1.1);

        &:hover::before {
          transform: translateY(300%);
      }
    }
  }
`
