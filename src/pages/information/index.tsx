import styles from '../../styles/pages/information.module.scss';


const Title: string = 'Information';

export default function Information() {
  return (
    <>
      <div className={styles.main__header__container}>
        <h2 className={styles.main__header}>Information</h2>
      </div>
      
      <div className={styles.info__list__container}>
        <ul>
          <li>お知らせはありません。</li>
        </ul>
      </div>
    </>
)
}

export const getServerSideProps = async () => {
  return {props: {title: Title}}
}
