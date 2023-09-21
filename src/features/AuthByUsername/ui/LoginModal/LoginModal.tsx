import { Suspense } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Loader } from 'shared/ui/Loader'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  className?: string
}

function LoginModal ({ isOpen, onClose, className }: LoginModalProps) {
  return (
      <Modal
          isOpen={isOpen}
          onClose={onClose}
          className={classNames('', {}, [className])}
          lazy
      >
          <Suspense fallback={<Loader/>}>
              <LoginFormAsync onSuccess={onClose}/>
          </Suspense>
      </Modal>
  )
}

export { LoginModal }
