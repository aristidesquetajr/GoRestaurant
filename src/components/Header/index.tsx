import { FiPlusSquare } from 'react-icons/fi'

import styles from './styles.module.scss'
import Logo from '../../assets/logo.svg'

interface HeaderProps {
  openModal: () => void
}

export function Header({ openModal }: HeaderProps) {
  return (
    <div className={styles.container}>
      <header>
        <img src={Logo} alt="GoRestaurant" />
        <nav>
          <div>
            <button type="button" onClick={openModal}>
              <div className={styles.text}>Novo Prato</div>
              <div className={styles.icon}>
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </div>
  )
}
