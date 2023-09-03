import { createRef } from 'react'
import { FiCheckSquare } from 'react-icons/fi'
import { Form } from '@unform/web'

import styles from './styles.module.scss'
import { Modal } from '../Modal'
import { Input } from '../Input'
import { FormHandles } from '@unform/core'
import { IFood } from '../../types'

interface ModalAddFoodProps {
  isOpen: boolean
  setIsOpen: () => void
  handleAddFood: (food: IFood) => void
}

export function ModalAddFood({
  isOpen,
  setIsOpen,
  handleAddFood
}: ModalAddFoodProps) {
  const formRef = createRef<FormHandles>()

  const handleSubmit = async (food: IFood) => {
    handleAddFood(food)
    setIsOpen()
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className={styles.text}>Adicionar Prato</p>
          <div className={styles.icon}>
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  )
}
