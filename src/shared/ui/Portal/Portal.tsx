import { type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  element?: HTMLElement
}

function Portal ({ children, element = document.body }: PortalProps) {
  return createPortal(children, element)
}

export { Portal }
