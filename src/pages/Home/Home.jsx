import {useEffect, useState } from 'react';
import Article from "../../components/Article/Article";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styled from './home.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Home () {


    // userState(): it store data like variable

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(): it is used when call API
    
    useEffect(() => {
        // API call
        setIsLoading(true)
        axios.get('http://localhost:8000/articles').then((result) => {
            setArticles(result.data);
            setIsLoading(false);
        }).catch((error) => {
            console.log(error);
            setIsLoading(false);
        });

    },[]);
 


    return (


        <div className={styled.homeWrapper}>
            <Navbar title="محسن بلاک" />
           
                <div className="container">
                    <h4 className={styled.head4}>مقاله جدید</h4>

                    {
                isLoading? <p>چند لحضه صبر کنید...</p> :(
                    <div className={styled.articles}>
                        {
                            articles.map((article) => (
                                <Link to={`article/${article.id}`}>
                                    <Article key={article.id} article={article} />
                                </Link>
                            ))
                        }
                        </div>
                        )
                    }
                    </div>
                
            <Footer />
        </div>
    );
}

export default Home