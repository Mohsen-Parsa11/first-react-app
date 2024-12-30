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
    
    useEffect(() => {
        axios.get(`http://localhost:8000/articles/${params.id}`).then((result) => {
            setArticle(result.data);
        }).catch((error) => {
            console.log(error)
        })
    },[])

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className={styled.aboutWrapper}>
                    <h3>{article.title}</h3>
                    <div className={styled.aboutInfo}>
                        <span>تاریخ: { article.date}</span>
                        <span>نویسنده: { article.author}</span>
                        <span>مدت زمان خواندن { article.readingTime} دقیفه</span>
                    </div>
                    <img src={image} alt="article" />
                    <p>در این دوران٫ خداوند متعال توسط چهار زن از بهشتیان ٫ حضرت مریم  آسیه  حضرت حوا  و کلثوم  حضرت خدیجه را یاری رساندند. این بانوان نورانی به دستور الله متعال در لحظه تولد حضرت زهرا  حضور یافتند و ایشان را یاری کردند. این دوران٫ خداوند متعال توسط چهار زن از بهشتیان ٫ حضرت مریم  آسیه  حضرت حوا  و کلثوم  حضرت خدیجه را یاری رساندند. این بانوان نورانی به دستور الله متعال در لحظه تولد حضرت زهرا  حضور یافتند و ایشان را یاری کردند. این دوران٫ خداوند متعال توسط چهار زن از بهشتیان ٫ حضرت مریم  آسیه  حضرت حوا  و کلثوم  حضرت خدیجه را یاری رساندند. این بانوان نورانی به دستور الله متعال در لحظه تولد حضرت زهرا  حضور یافتند و ایشان را یاری کردند. این دوران٫ خداوند متعال توسط چهار زن از بهشتیان ٫ حضرت مریم  آسیه  حضرت حوا  و کلثوم  حضرت خدیجه را یاری رساندند. این بانوان نورانی به دستور الله متعال در لحظه تولد حضرت زهرا  حضور یافتند و ایشان را یاری کردند. این دوران٫ خداوند متعال توسط چهار زن از بهشتیان ٫ حضرت مریم  آسیه  حضرت حوا  و کلثوم  حضرت خدیجه را یاری رساندند. این بانوان نورانی به دستور الله متعال در لحظه تولد حضرت زهرا  حضور یافتند و ایشان را یاری کردند. این دوران٫ خداوند متعال توسط چهار زن از بهشتیان ٫ حضرت مریم  آسیه  حضرت حوا  و کلثوم  حضرت خدیجه را یاری رساندند. این بانوان نورانی به دستور الله متعال در لحظه تولد حضرت زهرا  حضور یافتند و ایشان را یاری کردند.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Aboutpage;