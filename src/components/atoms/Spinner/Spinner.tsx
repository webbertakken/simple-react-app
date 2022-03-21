import { CgSpinner } from 'react-icons/all'
import styles from './Spinner.module.scss'

interface Props {}

function Spinner({}: Props): JSX.Element {
  return <CgSpinner className={styles.iconSpin} />
}

export default Spinner
