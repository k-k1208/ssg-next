/* 
ダイナミックルーティングによるブログ詳細部分
1. getStaticProps：ビルド時に静的なファイルを生成し、ページコンポーネントで使用する値を用意
2. getStaticPaths：ビルド時にレンダリングする必要のあるパスのリストを生成
が必要
*/
import type { NextPage, InferGetStaticPropsType} from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import {getAllPostIds, getPostData, jsonType} from '../../lib/post'

// ページコンポーネント:pagesフォルダにあるファイルからエクスポートされた関数
// posts はビルド時に getStaticProps() によって生成されます。

const Post = ({post}:{post:jsonType}) => {
// urlのクエリをパラメータとして所得できる
const router = useRouter();
const { id } = router.query;
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      
      <h1 className='text-center text-3xl'>
        Detail Page
      </h1>
      <h2 className='text-center'>
          {post.id}<br></br>
          {post.title}<br></br>
      </h2>
      <br></br>
      <p className='text-center'>
       {post.body}
      </p>
    </>
  )
}
export default Post


export const getStaticPaths = async() => {
    console.log('getStaticPathsが実行されました')
    const paths = await getAllPostIds()
    return {
      paths: paths,
      fallback : false
    }
  }
type Id = {id: string}
type Params = {params: Id}
export const getStaticProps = async({params}:Params) => {
    const post = await getPostData(params.id)
    return {
        props: {post}
    }

}