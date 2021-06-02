import { useEffect, useState } from "react"
import './App.css';
import axios from 'axios'
import Post from "./components/Post";
import Pagenation from "./components/Pagenation";

// useEffect hook side effectlar uchun ishlatiladi

function App() {
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(12)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(res.data)
            setPosts(res.data)
            setLoading(false)
        }

        fetchPosts()

    }, [])

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    function paginate(pNumber) {
        setCurrentPage(pNumber)
    }



    return (


        <div className="App">

            <h1><span className='text-primary'>Dev</span> posts</h1>
            <div className='posts-container'>
                {loading && <h1>Loading...</h1>}
                {currentPosts.length > 0 && currentPosts.map((eachEl) => {
                    return <Post key={eachEl.id} title={eachEl.title} body={eachEl.body }/>
                })}

            </div>
            <Pagenation postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate }/>
        </div>
    );
}

export default App;
