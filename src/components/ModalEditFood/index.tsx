import { createRef } from 'react'
import { FiCheckSquare } from 'react-icons/fi'
import { Form } from '@unform/web'

import styles from './styles.module.scss'
import { Modal } from '../Modal'
import { Input } from '../Input'
import { FormHandles } from '@unform/core'
import { IFood } from '../../types'

interface ModalEditFoodProps {
  isOpen: boolean
  setIsOpen: () => void
  editingFood: IFood
  handleUpdateFood: (food: IFood) => void
}

export function ModalEditFood({
  isOpen,
  setIsOpen,
  editingFood,
  handleUpdateFood
}: ModalEditFoodProps) {
  const formRef = createRef<FormHandles>()

  const handleSubmit = async (food: IFood) => {
    handleUpdateFood(food)
    setIsOpen()
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form
        className={styles.form}
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={editingFood}
      >
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className={styles.text}>Editar Prato</div>
          <div className={styles.icon}>
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  )
}
