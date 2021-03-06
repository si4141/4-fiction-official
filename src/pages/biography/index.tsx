import styles from '../../styles/pages/biography.module.scss';

const Title: string = 'Biography';

export default function Biography() {
    return (
        <>
          <div className={styles.main__header__container}>
            <h2 className={styles.main__header}>Biography</h2>
          </div>
          <div className={styles.artist_img_wrapper}>
            <img src="/top_tokyo_station.jpg" alt="artist_img" className={styles.artist_image} height={500} width={800} decoding="async" />
          </div>
          <div className={styles.member_list}>
            <ul>
              <li>
                Key. Vo. うえのしゅんすけ
              </li>
              <li>Gt. Cho いそかわ</li>
              <li>Ba. あいざわさえ</li>
              <li>Dr. すぎうらゆうた</li>
            </ul>
          </div>

          <div className={styles.short_description}>
            <p>2020年7月結成。</p>
            <p>現在、ミニアルバムをレコーディング中。</p>
          </div>
        </>
    )
}

export const getServerSideProps = async () => {
  return {props: {title: Title}}
}
