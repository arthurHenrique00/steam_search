import styled from 'styled-components'

export const Glass = styled.a`
  background-color: rgba(300, 300, 300, 0.3);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 16px;
  border-radius: 12px;

  display: inline-flex;
  align-items: center;

  img {
    margin-right: 12px;
  }
`
