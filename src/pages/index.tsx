import styles from '../styles/pages/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <>
        <div className={styles.artist_image_wrapper}>
          <img src="/top_tokyo_station.jpg" alt="artist image" className={styles.artist_image} height={500} width={800} decoding="async" />
        </div>

        <div className={styles.main__header__container}>
          <Link href='/information'><h2 className={styles.main__header}>Information</h2></Link>
        </div>
        
        <div className={styles.info__list__container}>
          <ul>
            <li>お知らせはありません。</li>
          </ul>
        </div>

        <div className={styles.main__header__container}>
          <Link href='/live'><h2 className={styles.main__header}>Live</h2></Link>
        </div>

        <div className={styles.info__list__container}>
          <ul>
            <li>ライブ情報はありません。</li>
          </ul>
        </div>
    </>
  )
}
