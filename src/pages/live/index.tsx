import styles from '../../styles/pages/information.module.scss';

const Title: string = 'Live';

export default function Live() {
  return (
    <>
      <div className={styles.main__header__container}>
        <h2 className={styles.main__header}>Live</h2>
      </div>
      
      <div className={styles.info__list__container}>
        <ul>
          <li>ライブ情報はありません。</li>
        </ul>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  return {props: {title: Title}}
}
