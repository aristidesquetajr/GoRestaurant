import { useState } from 'react'
import { Header } from '../../components/Header'
import { api } from '../../services/api'
// import Food from '../../components/Food'
// import ModalAddFood from '../../components/ModalAddFood'
// import ModalEditFood from '../../components/ModalEditFood'
import styles from './styles.module.scss'

export function Dashboard() {
  const [foods, setFoods] = useState([])
  const [editingFood, setEditingFood] = useState({})
  const [modalOpen, setModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)

  async function componentDidMount() {
    const foods = (await api.get('/foods')).data

    setFoods(foods)
  }

  /*
  const handleAddFood = async (food) => {
    const { foods } = this.state

    try {
      const response = await api.post('/foods', {
        ...food,
        available: true
      })

      this.setState({ foods: [...foods, response.data] })
    } catch (err) {
      console.log(err)
    }
  }

  const handleUpdateFood = async (food) => {
    const { foods, editingFood } = this.state

    try {
      const foodUpdated = await api.put(`/foods/${editingFood.id}`, {
        ...editingFood,
        ...food
      })

      const foodsUpdated = foods.map((f) =>
        f.id !== foodUpdated.data.id ? f : foodUpdated.data
      )

      this.setState({ foods: foodsUpdated })
    } catch (err) {
      console.log(err)
    }
  }

  const handleDeleteFood = async (id) => {
    const { foods } = this.state

    await api.delete(`/foods/${id}`)

    const foodsFiltered = foods.filter((food) => food.id !== id)

    this.setState({ foods: foodsFiltered })
  }
  */

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen)
  }

  /*
  const handleEditFood = (food) => {
    this.setState({ editingFood: food, editModalOpen: true })
  } */

  return (
    <>
      <Header openModal={toggleModal} />
      {/* <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={this.toggleModal}
        handleAddFood={this.handleAddFood}
      />
      <ModalEditFood
        isOpen={editModalOpen}
        setIsOpen={this.toggleEditModal}
        editingFood={editingFood}
        handleUpdateFood={this.handleUpdateFood}
      />

      <div className={styles.foodsContainer} data-testid="foods-list">
        {foods &&
          foods.map((food) => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
            />
          ))}
      </div> */}
    </>
  )
}
