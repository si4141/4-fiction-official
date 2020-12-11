import Head from 'next/head'
import styles from '../styles/layout.module.scss'
import SiteHeader from './siteHeader'

export default function Layout(props) {
  const {title, children} = props;
  const siteTitle = 'ヨンフィクション Official Web Site'
  const titleText = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta content={titleText} name="title" />
        <meta name="description" content="ロックバンド ヨンフィクションの公式webサイトです。"></meta>
        <script src="https://kit.fontawesome.com/69cad91b52.js" crossOrigin="anonymous"></script>
        <meta property="og:type" content={title ? "website": "article"}/>
        <meta property="og:title" content={titleText} />
        <meta property="og:url" content="https://4-fiction.tokyo" />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:locale" content="ja_JP" />
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