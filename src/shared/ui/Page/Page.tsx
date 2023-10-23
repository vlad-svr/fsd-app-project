import { memo, type ReactNode, useRef } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll'
import cls from './Page.module.scss'

interface PageProps {
  children: ReactNode
  className?: string
  onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const triggerRef = useRef<HTMLDivElement | null>(null)

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })

  return (
      <section
          ref={wrapperRef}
          className={classNames(cls.wrapper, {}, [className])}
        >
          {children}
          <div ref={triggerRef} />
      </section>
  )
})
