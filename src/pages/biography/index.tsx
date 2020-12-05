import Layout from '../../components/layout';
import styles from '../../styles/biography.module.scss';


export default function Biography() {
    return (
        <Layout title='Biography'>
          <div className={styles.main__header__container}>
            <h2 className={styles.main__header}>Biography</h2>
          </div>
          <div className={styles.artist_img_wrapper}>
            <img src="/top_tokyo_station.jpg" alt="artist_img" className={styles.artist_image} />
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
        </Layout>
    )
}