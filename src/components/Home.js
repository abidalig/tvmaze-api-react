import axios from "axios";
import '../CSS/style.css';
import { useState, useEffect } from "react";
import Summary from "./Summary";
import { useNavigate } from "react-router-dom";
function Home() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const goToSummary = (summary) => {
        navigate('/sum', { state: { sum: summary } })
        //console.log("id",summary);
    }

    useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
            .then(res => { //console.log(res.data);
                setPosts(res.data)
            })
            .catch(err => { console.log(err); })
    }, [])

    return (
        <div>

            {
                posts.map((post) => (

                    <div className='movie-box' key={post.show.id}>

                        <div className="card">
                            <img className="image-sum" src={post.show.image.medium} alt={post.show.summary} style={{ width: "100%" }} />
                            <h3>{post.show.name}</h3>
                            <p className="genres">{post.show.genres.join(", ")}</p>
                            <p className="genres">📺 {post.show.language}</p>
                            <p><button className='add-btn' onClick={() => goToSummary(post.show)}>summary</button></p>

                        </div>
                    </div>
                )
                )

            }

        </div>

    )
}
export default Home;