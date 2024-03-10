import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi'
import { getUserAuthData } from '@/entities/User'
import { RatingCard } from '@/entities/Rating'
import { Skeleton } from '@/shared/ui/Skeleton'

export interface ArticleRatingProps {
  articleId: string
  className?: string
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props
  const { t } = useTranslation()
  const userData = useSelector(getUserAuthData)

  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? ''
  })
  const [rateArticleMutation] = useRateArticle()

  const handleRateArticle = useCallback(async (starsCount: number, feedback?: string) => {
    try {
      await rateArticleMutation({
        userId: userData?.id ?? '',
        articleId,
        rate: starsCount,
        feedback
      })
    } catch (e) {
      // handle error
      console.error(e)
    }
  }, [articleId, rateArticleMutation, userData?.id])

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    void handleRateArticle(starsCount, feedback)
  }, [handleRateArticle])

  if (isLoading) {
    return <Skeleton width="100%" height={120} />
  }

  const rating = data?.[0]

  return (
      <RatingCard
          onCancel={onAccept}
          onAccept={onAccept}
          rate={rating?.rate ?? 0}
          className={className}
          title={t('Оцените статью')}
          feedbackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
          hasFeedback
        />
  )
})

export default ArticleRating
