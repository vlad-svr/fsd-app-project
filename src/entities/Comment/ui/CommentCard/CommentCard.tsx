import classNames from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Avatar } from '@/shared/ui/Avatar'
import { Text } from '@/shared/ui/Text'
import { Skeleton } from '@/shared/ui/Skeleton'
import cls from './CommentCard.module.scss'
import { type Comment } from '../../model/types/comment'
import { AppLink } from '@/shared/ui/AppLink'
import { VStack } from '@/shared/ui/Stack'
import { getRouteProfile } from '@/shared/constants/router'

interface CommentCardProps {
  comment?: Comment
  isLoading?: boolean
  className?: string
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props

  if (isLoading) {
    return (
        <VStack
            max
            gap="8"
            className={classNames(cls.wrapper, {}, [className, cls.loading])}
            data-testid="CommentCard.Loading"
        >
            <div className={cls.header}>
                <Skeleton width={30} height={30} border="50%" />
                <Skeleton height={16} width={100} className={cls.username} />
            </div>
            <Skeleton className={cls.text} width="100%" height={50} />
        </VStack>
    )
  }

  if (!comment) {
    return null
  }

  return (
      <VStack
          max
          gap="8"
          className={classNames(cls.wrapper, {}, [className])}
          data-testid="CommentCard.Content"
      >
          <AppLink to={getRouteProfile(comment?.user?.id)} className={cls.header}>
              {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
              <Text className={cls.username} title={comment.user.username} />
          </AppLink>
          <Text className={cls.text} text={comment.text} data-testid="CommentCard" />
      </VStack>
  )
})
