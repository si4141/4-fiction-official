import '../styles/globals.scss'
import Layout from '../components/layout';

function App({ Component, pageProps }) {
  return (
    <Layout title={pageProps.title}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App;
