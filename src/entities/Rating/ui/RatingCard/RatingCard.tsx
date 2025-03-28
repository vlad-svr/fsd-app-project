import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import classNames from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { StarRating } from '@/shared/ui/StarRating'
import { Modal } from '@/shared/ui/Modal'
import { Input } from '@/shared/ui/Input'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button'
import { Drawer } from '@/shared/ui/Drawer'

interface RatingCardProps {
  rate: number
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    onAccept,
    feedbackTitle,
    hasFeedback,
    onCancel,
    title,
    rate
  } = props
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [starsCount, setStarsCount] = useState(rate)
  const [feedback, setFeedback] = useState('')

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount)
    if (hasFeedback) {
      setIsModalOpen(true)
    } else {
      onAccept?.(selectedStarsCount)
    }
  }, [hasFeedback, onAccept])

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false)
    onAccept?.(starsCount, feedback)
  }, [feedback, onAccept, starsCount])

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false)
    onCancel?.(starsCount)
  }, [onCancel, starsCount])

  const modalContent = (
      <>
          <Text
              title={feedbackTitle}
            />
          <Input
              value={feedback}
              onChange={setFeedback}
              placeholder={t('your_feedback')}
              data-testid="RatingCard.Input"
            />
      </>
  )

  return (
      <Card className={classNames('', {}, [className])} data-testid="RatingCard">
          <VStack align="center" gap="8">
              <Text title={starsCount ? t('thanks_for_feedback') : title} />
              <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
          </VStack>
          <BrowserView>
              <Modal isOpen={isModalOpen} lazy>
                  <VStack max gap="32">
                      {modalContent}
                      <HStack max gap="16" justify="end">
                          <Button
                              onClick={cancelHandle}
                              theme={ButtonTheme.OUTLINE_RED}
                              data-testid="RatingCard.Close"
                          >
                              {t('close')}
                          </Button>
                          <Button
                              onClick={acceptHandle}
                              data-testid="RatingCard.Send"
                          >
                              {t('send')}
                          </Button>
                      </HStack>
                  </VStack>
              </Modal>
          </BrowserView>
          <MobileView>
              <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
                  <VStack gap="32">
                      {modalContent}
                      <Button
                          fullWidth
                          onClick={acceptHandle}
                          size={ButtonSize.L}
                          data-testid="RatingCard.Send"
                      >
                          {t('send')}
                      </Button>
                  </VStack>
              </Drawer>
          </MobileView>
      </Card>
  )
})
