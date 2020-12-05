import Head from 'next/head'
import styles from '../styles/layout.module.scss'
import SiteHeader from './siteHeader'

export default function Layout(props) {
  const {title, children} = props;
  const siteTitle = 'ヨンフィクション Official Web Site'

  return (
    <>
      <Head>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <script src="https://kit.fontawesome.com/69cad91b52.js" crossOrigin="anonymous"></script>
      </Head>
      <div className={styles.container}>
        <SiteHeader />
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>
          <small>© 2020 ヨンフィクション</small>   
        </footer>
      </div>
    </>
  )
}