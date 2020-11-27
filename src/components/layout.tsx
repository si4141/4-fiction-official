import Head from 'next/head'
import styles from './layout.module.css'

export default function Layout(props) {
  const {title, children} = props;
  const siteTitle = 'ヨンフィクション Official Web Site'

  return (
    <div>
      <Head>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      </Head>
    </div>
  )
  // return <div className={styles.container}>{children}</div>
}