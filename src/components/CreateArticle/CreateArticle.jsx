import { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styled from "./CreateArticle.module.css";

function CreateArticle () {

    const [newArticle, setNewArticle] = useState({
        title: "",
        date: "",
        readingTime: "",
        author:""
    });

    const handleChangeArticle = (e) => {
        setNewArticle((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));

        // switch (e.target.name) {
        //     case "title":
        //         setNewArticle((prevState)=>({
        //             ...prevState,
        //             title: e.target.value
        //         }))
        //         break
        //     case "date":
        //         setNewArticle((prevState)=>({
        //             ...prevState,
        //             date: e.target.value
        //         }))
        //         break
        //     default:
        //         console.log("")
        // }
    };

    
    console.log(newArticle)
    
    return (
        <>
            <Navbar />
            <div className={styled.ArticleWrapper}>
                <div className="container">
                    <h4>ساخت مقاله</h4>

                    <form action="">
                    <div className={styled.parent}>
                     <div>
                    <label htmlFor="title">عنوان</label>
                    <input type="text" autoComplete="off" onChange={handleChangeArticle} name="title" />
                    </div>

                    <div>
                    <label htmlFor="date">تاریخ</label>
                    <input type="text" autoComplete="off" onChange={handleChangeArticle} name="date" />
                    </div>

                    <div>
                    <label htmlFor="readingTime">مدت زمان خواندن</label>
                    <input type="text" autoComplete="off" onChange={handleChangeArticle} name="readingTime" />
                    </div>

                    <div>
                    <label htmlFor="author">نویسنده</label>
                    <input type="text" autoComplete="off" onChange={handleChangeArticle} name="author" />
                    </div>
                    </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CreateArticle;