import styled from 'styled-components'

export const HeaderStyled = styled.header`
  border-radius: 12px;
  margin: 0 auto;
  width: 500px;
  padding: 16px;
  margin-top: 36px;
  background-color: black;
  position: sticky;

  .first-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    label {
      font-size: 12px;
      font-weight: bold;
      color: white;
    }

    input {
      background-color: gray;
      border-radius: 12px;
      color: white;
      border: none;
      padding: 4px;
    }

    > img {
      margin-right: 12px;
    }

    button {
      background: transparent;
      border: none;

      img {
        transition: transform 0.2s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  .steamid {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
    color: white;
    font-size: 12px;
    color: gray;

    img {
      border-radius: 9px;
      margin-left: 12px;
    }
  }
`
