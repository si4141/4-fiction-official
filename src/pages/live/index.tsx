import Link from 'next/link';


const Title: string = 'Live';

export default function Live() {
  return (
    <>
      <div>
        <h2>このページは準備中です。</h2>
        <Link href="/"><a>トップへ戻る</a></Link>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  return {props: {title: Title}}
}
