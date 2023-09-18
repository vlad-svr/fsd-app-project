import classNames from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm'

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
          <LoginForm/>
      </Modal>
  )
}

export { LoginModal }
