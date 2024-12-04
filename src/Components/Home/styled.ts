import styled from 'styled-components'

export const First = styled.div`
  padding: 22px;
  margin: 0 auto;
  background-color: rgba(26, 23, 61, 0.3);
  background-repeat: no-repeat;
  background-size: cover;
  width: 1200px;
  border-radius: 22px;
  display: flex;
  color: white;
  align-items: center;

  .banner {
    h2 {
      margin-bottom: 12px;
      color: white;
    }

    img {
      border-radius: 9px;
      margin: 64px;
    }
  }

  .infos {
    .images-game {
      display: flex;

      img {
        border-radius: 12px;
        width: 150px;
        height: 70px;
        margin-right: 12px;
        transition: transform 0.2s;

        &:hover {
          transform: scale(1.3);
        }
      }
    }

    p {
      width: 500px;
      margin: 36px 0;
    }
      .requirements {
      display: flex;
      span {
        border-radius: 12px;
        font-weight: bold;
        margin-right: 12px;
        padding: 12px;
        flex-grow: 1;
      }
      }
    }
  }
`
