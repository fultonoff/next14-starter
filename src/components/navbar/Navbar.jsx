import Links from './links/links'
import styles from './navbar.module.css'
import { auth } from '@/libs/auth'

const Navbar = async() => {

  const session = await auth()
  return (
    <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <div >
            <Links session={session}/>
        </div>
    </div>
  )
}

export default Navbar