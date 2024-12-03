import styled from 'styled-components'

export const FooterStyled = styled.footer`
  background-color: #252626;
  padding: 26px;
  display: block;
  padding-left: 120px;
  margin-top: 64px;

  ul {
    list-style: none;
    display: flex;
    margin-bottom: 22px;

    li {
      margin-right: 16px;

      a {
        font-size: 12px;
        color: #5f6161;
        text-decoration: none;
        font-weight: bold;

        &:hover {
          color: #878786;
        }
      }
    }
  }

  .infos-footer {
    display: flex;
    align-items: center;

    img {
      margin-right: 22px;
    }

    p {
      color: white;
      font-size: 12px;
    }
  }
`
