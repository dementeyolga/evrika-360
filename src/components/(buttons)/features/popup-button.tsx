'use client'

import { useState, MouseEvent } from 'react'
import { ActionButton } from '../action-button'
import { CallbackModal } from '@/components/(modals)/callback-modal/callback-modal'
import { HeaderButton } from '../header-button'
import { SignupDemoModal } from '@/components/(modals)/wide-callback-modal/signup-demo-modal'
import { TestYourDataModal } from '@/components/(modals)/wide-callback-modal/test-your-data-modal'

interface PopupButtonProps {
  button?: 'header' | 'action'
  variant?: 'basic' | 'test' | 'demo'
  children: string
}

export const PopupButton = ({
  button = 'action',
  variant = 'basic',
  children,
}: PopupButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const wrapperClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal()
    }
  }

  const Button = button === 'action' ? ActionButton : HeaderButton
  let Modal
  switch (variant) {
    case 'basic':
      Modal = CallbackModal
      break
    case 'demo':
      Modal = SignupDemoModal
      break
    case 'test':
      Modal = TestYourDataModal
      break
  }

  return (
    <div>
      <Button onClick={handleOpenModal}>{children}</Button>

      {isModalOpen && (
        <Modal
          onClick={wrapperClickHandler}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  )
}
