import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faYoutubeSquare} from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/siteHeader.module.scss'
import Link from 'next/link'
import { useState } from 'react'

export default function SiteHeader() {
  const [isMenuOpen, setMenuState] = useState(false);

  return (
      <div className={styles.header__box}>
        <header>
          <Link href='/'><h1 className={styles.logo}>4-Fiction</h1></Link>
        </header>

        <div className={styles.toggle__btn} onClick={() => setMenuState(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div 
          className={!isMenuOpen ? styles.navigation__menu : styles.navigation__menu__open}
          onClick={() => setMenuState(false)}
        >
          {isMenuOpen && 
            <Link href="/">
              <h2 className={styles.menu__header}>4-Fiction</h2>
            </Link>
          }
          <nav>
          <ul className={styles.navigation__list}>
            <li><Link href='/information'><a>Information</a></Link></li>
            <li><Link href='/live'><a>Live</a></Link></li>
            <li><Link href='music'><a>Music</a></Link></li>
            <li><Link href='biography'><a>Biography</a></Link></li>
          </ul>
          </nav>
          <div className={styles.icon_wrapper}>
            <a href='https://twitter.com/band_4_Fiction'><FontAwesomeIcon icon={faTwitterSquare} className={styles.icon} /></a>
            <a href='https://www.youtube.com/channel/UCg7RsIZ0yQ-KHh4NfQ4-95A/featured'><FontAwesomeIcon icon={faYoutubeSquare} className={styles.icon} /></a>
          </div>
        </div>
      </div>
  )
}