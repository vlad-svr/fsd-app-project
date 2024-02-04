import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { AddCommentForm } from 'features/addCommentForm'
import { CommentList } from 'entities/Comment'
import { useDispatch, useSelector } from 'react-redux'
import { VStack } from 'shared/ui/Stack'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import classNames from 'shared/lib/classNames/classNames'
import { useInitialEffect } from 'shared/lib/hooks'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import {
  fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'

interface ArticleDetailsCommentsProps {
  id?: string
  className?: string
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
  const { className, id } = props
  const { t } = useTranslation()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const dispatch = useDispatch()

  const handleSendComment = useCallback((text: string) => {
    // @ts-expect-error hghg
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  useInitialEffect(() => {
    // @ts-expect-error hghg
    dispatch(fetchCommentsByArticleId(id))
  })

  return (
      <VStack gap="16" max className={classNames('', {}, [className])}>
          <Text
              size={TextSize.L}
              title={t('comments')}
            />
          <AddCommentForm onSendComment={handleSendComment} />
          <CommentList
              isLoading={commentsIsLoading}
              comments={comments}
            />
      </VStack>
  )
})
