import Layout from '../components/layout'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Layout>
      <div>
        <h2>このページは準備中です。</h2>
        <Link href="/"><a>トップへ戻る</a></Link>
      </div>
    </Layout>
  )
}