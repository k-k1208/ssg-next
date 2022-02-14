import type { NextPage, InferGetStaticPropsType} from 'next'
import Head from 'next/head'
import Link from "next/link";
import {getAllPostsData, getAllPostIds} from '../lib/post'

// ページコンポーネント:pagesフォルダにあるファイルからエクスポートされた関数
// posts はビルド時に getStaticProps() によって生成されます。
type Props = InferGetStaticPropsType<typeof getStaticProps>
const Home: NextPage<Props> = ({posts}) => {
  return (
    <>
      <Head>
        <title>SSGの体験ページ</title>
      </Head>
      <h1 className="text-4xl text-center font-bold">
        SSG
      </h1>
      <ul>
        {posts? posts.map(post => (
            <li key={post.id}>
              {post.id}{':'}
              <Link href={`/posts/${post.id}`}>
                <span className='hover:underline'>{post.title}</span>
              </Link>
            </li>))
          : <p>error:postsが存在しません</p>}
      </ul>
    </>
  )
}
export default Home 


// export分を忘れない！！
export const getStaticProps = async() => {
  console.log('getStaticPropsが実行されました')
  const posts = await getAllPostsData()
  return {
    /*
    { props: posts } を返すことでHome コンポーネントは
    ビルド時に`posts`を prop として受け取ります。
    */ 
    props: {posts}
  }
}