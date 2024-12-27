import {useEffect, useState } from 'react';
import Article from "../../components/Article/Article";
import Navbar from "../../components/Navbar/Navbar";
import styled from './home.module.css';
import axios from "axios";
function Home () {


    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // API call

        axios.get('http://localhost:8000/articles').then((result) => {
            setArticles(result)
        }).catch((error) => {
            console.log(error)
        });
        
    },[]);
 


    return (


        <div className={styled.homeWrapper}>
            <Navbar title="محسن بلاک" />

            <div className="container">
                <h4>مقاله جدید</h4>

                <div className={styled.articles}>
                    {
                        articles.map((article) => (
                            <Article article={article} />
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default Home