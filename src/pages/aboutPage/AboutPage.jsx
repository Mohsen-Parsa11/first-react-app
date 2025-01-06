import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styled from "./Aboutpage.module.css";
import image from "../../assets/images/people2.jpg"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Aboutpage () {


    const params= useParams();
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        //API call
        setIsLoading(true)
        axios.get(`http://localhost:8000/articles/${params.id}`).then((result) => {
            setArticle(result.data);    
            setIsLoading(false);
        }).catch((error) => {
            console.log(error)
            setIsLoading(false);
        })
    },[])

    return (
        <div>
            <Navbar />
            <div className="container">
                {
                    isLoading ? <p>چند لحضه صبر کنید...</p> : (
                
                        <div className={styled.aboutWrapper}>
                            <h3>{article.title}</h3>
                            <div className={styled.aboutInfo}>
                                <span>تاریخ: {article.date}</span>
                                <span>نویسنده: {article.author}</span>
                                <span>مدت زمان خواندن {article.readingTime} دقیفه</span>
                            </div>
                            <img src={image} alt="article" />
                            <p>{article.content}</p>
                        </div>
                    )
                }
            </div>
            <Footer />
        </div>
    )
}

export default Aboutpage;