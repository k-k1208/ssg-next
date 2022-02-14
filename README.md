# SSGによるブログ実装
jsonplaceholderから外部データをfetchAPIを用いて所得しpre-renderingする
　　
## pages/index.tsx：ブログの一覧ページ
ビルド時にgetStaticProps関数が実行されブログ一覧に必要な情報を所得しpropsとして、ページコンポーネントとして渡されレンダリングされる。(pre-rendering)　　
　　
1. getStaticProps関数：propsをページコンポーネントに渡す
2. ページコンポーネント(Home)
　　
## pages/posts/[id].tsx：ブログの詳細ページ
ビルド時にgetStaticPaths関数が実行され、事前ビルドするパス対象を指定しgetStaticProps関数に渡す。そのパスを元にgetStaticProps関数でブログ詳細に必要な情報を所得しpropsとして、ページコンポーネントとして渡されレンダリングされる。(pre-rendering)　　
　　
1. getStaticPaths関数：pathsをgetStaticProps関数に渡す
2. getStaticProps関数：propsをページコンポーネントに渡す
3. ページコンポーネント([id].tsx)
　　　　
　　　
　　　
# 思考の流れ　　
- 外部データ所得
    - featch APIを使用
- データを用いてレンダリング
    - レンダリングにSSR,SSG,CSR,ISRのどの仕組みを用いる？→今回はSSG
- getStaticProps関数が必要
    - ブログ一覧ページ：SSG
        - getStaticProps関数
    - ブログ詳細ページ：ダイナミックルーティングを用いたSSG
        - getStaticProps関数+getStaticPaths関数

