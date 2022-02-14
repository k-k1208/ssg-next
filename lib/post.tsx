// fetch apiを用いたデータ所得関数を記載

export type jsonType = {
    userId:number;
    id:number;
    title:string;
    body:string;
}

type idType = {
    id:string
}
type pathType = {
    params : idType
}

export const getAllPostsData = async():Promise<jsonType[]> => {
    console.log('getAllPostsDataが実行されました')
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts= (await res.json()) as jsonType[]
    return posts
}

export const getAllPostIds = async ():Promise<Array<pathType>> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts= (await res.json()) as jsonType[]
    const paths:Array<pathType> = []
    let path:pathType
    posts.map((post) => {
        path = {params: {id:String(post.id)}}
        paths.push(path)
    })
    return paths
}

// idに対応したブログ一件を所得
export const getPostData = async (id:string) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    const post= (await res.json()) as jsonType
    return post;
}

