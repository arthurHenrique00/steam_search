import React from 'react'
import { Glass } from './style'

type GlassProps = React.PropsWithChildren<{
  href?: string
  target?: string
}>

const GlassButton: React.FC<GlassProps> = ({ href, target, children }) => {
  return (
    <Glass href={href} target={target}>
      {children}
    </Glass>
  )
}

export default GlassButton
