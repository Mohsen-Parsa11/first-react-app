import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styled from "./Aboutpage.module.css";
import image from "../../assets/images/people2.jpg"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Aboutpage () {


    const params= useParams();
    
    // const [article, setArticle] =useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/articles/${params}`).then((result) => {
            // setArticle(result.data);
            console.log(result.data);
        }).catch((error) => {
            console.log(error)
        })
    })

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className={styled.aboutWrapper}>
                    <h3>متغییر ها در جاوا اسکریپت</h3>
                    <div className={styled.aboutInfo}>
                        <span>تاریخ:۱۴۰۲/۴/۳</span>
                        <span>نویسنده: محسن پارسا</span>
                        <span>مدت زمان خواندن ۵ دقیفه</span>
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