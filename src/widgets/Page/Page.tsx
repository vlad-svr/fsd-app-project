import { memo, type ReactNode, type UIEvent, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import classNames from 'shared/lib/classNames/classNames'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll'
import cls from './Page.module.scss'
import { scrollStoreActions } from 'features/scrollStore'
import { useAppDispatch, useInitialEffect, useThrottle } from 'shared/lib/hooks'
import { getScrollByPath } from 'features/scrollStore/model/selectors/scrollStore'
import { type StateSchema } from 'app/providers/StoreProvider'

export const PAGE_ID = 'PAGE_ID'

interface PageProps {
  children: ReactNode
  className?: string
  onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
  const { pathname } = useLocation()
  const dispatch = useAppDispatch()
  const { className, children, onScrollEnd } = props
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const triggerRef = useRef<HTMLDivElement | null>(null)
  const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname))

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })

  useInitialEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = scrollPosition
    }
  })

  const onScroll = useThrottle((event: UIEvent<HTMLElement>) => {
    dispatch(scrollStoreActions.setScrollPosition({
      position: event.currentTarget.scrollTop,
      path: pathname
    }))
  }, 500)

  return (
      <main
          ref={wrapperRef}
          className={classNames(cls.wrapper, {}, [className])}
          onScroll={onScroll}
          id={PAGE_ID}
        >
          {children}
          {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
      </main>
  )
})
