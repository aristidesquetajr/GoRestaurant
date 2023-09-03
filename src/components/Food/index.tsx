import { FiEdit3, FiTrash } from 'react-icons/fi'

import styles from './styles.module.scss'
import { api } from '../../services/api'
import { IFood } from '../../types'
import { useState } from 'react'

interface FoodProps {
  food: IFood
  handleDelete: (foodId: number) => Promise<void>
  handleEditFood: (food: IFood) => void
}

export function Food({ food, handleDelete, handleEditFood }: FoodProps) {
  const [isAvailable, setIsAvailable] = useState(food.available)

  const toggleAvailable = async () => {
    await api.put(`/foods/${food.id}`, {
      ...food,
      available: !isAvailable
    })

    setIsAvailable(!isAvailable)
  }

  const setEditingFood = () => {
    handleEditFood(food)
  }

  return (
    <div
      className={`${styles.container} ${!isAvailable ? styles.available : ''}`}
    >
      <header>
        <img src={food.image} alt={food.name} />
      </header>
      <section className={styles.body}>
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <p className={styles.price}>
          R$ <b>{food.price}</b>
        </p>
      </section>
      <section className={styles.footer}>
        <div className={styles.iconContainer}>
          <button
            type="button"
            className={styles.icon}
            onClick={setEditingFood}
            data-testid={`edit-food-${food.id}`}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className={styles.icon}
            onClick={() => handleDelete(food.id)}
            data-testid={`remove-food-${food.id}`}
          >
            <FiTrash size={20} />
          </button>
        </div>

        <div className={styles.availabilityContainer}>
          <p>{isAvailable ? 'Disponível' : 'Indisponível'}</p>

          <label
            htmlFor={`available-switch-${food.id}`}
            className={styles.switch}
          >
            <input
              id={`available-switch-${food.id}`}
              type="checkbox"
              checked={isAvailable}
              onChange={toggleAvailable}
              data-testid={`change-status-food-${food.id}`}
            />
            <span className={styles.slider} />
          </label>
        </div>
      </section>
    </div>
  )
}
