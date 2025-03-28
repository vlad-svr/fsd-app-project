import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import classNames from '@/shared/lib/classNames/classNames'
import { Input } from '@/shared/ui/Input'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { useAppDispatch } from '@/shared/lib/hooks'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { HStack } from '@/shared/ui/Stack'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice'
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import cls from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
  onSendComment: (text: string) => void
  className?: string
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props
  const { t } = useTranslation()
  const text = useSelector(getAddCommentFormText)
  // const error = useSelector(getAddCommentFormError)
  const dispatch = useAppDispatch()

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  return (
      <DynamicModuleLoader reducers={reducers}>
          <HStack
              max
              justify="between"
              gap="16"
              className={classNames(cls.wrapper, {}, [className])}
              data-testid="AddCommentForm"
          >
              <Input
                  className={cls.input}
                  placeholder={t('enter_comment_text')}
                  value={text}
                  onChange={onCommentTextChange}
                  data-testid="AddCommentForm.Input"
                />
              <Button
                  theme={ButtonTheme.OUTLINE}
                  onClick={onSendHandler}
                  data-testid="AddCommentForm.Button"
                >
                  {t('send')}
              </Button>
          </HStack>
      </DynamicModuleLoader>
  )
})

export default AddCommentForm
