import styled from 'styled-components'

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: black;
  border-radius: 12px;
  align-items: center;
  margin: 0 auto;
  width: 500px;
  padding: 12px;
  margin-top: 36px;

  label {
    font-size: 12px;
    font-weight: bold;
    color: white;
  }

  input {
    background-color: gray;
    border-radius: 4px;
    border-color: white;
    color: white;
  }

  > img {
    margin-right: 12px;
  }

  button {
    background: transparent;
    border: none;
  }
`
