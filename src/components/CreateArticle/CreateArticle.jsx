import { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styled from "./CreateArticle.module.css";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import axios from "axios";

function CreateArticle () {

    const [newArticle, setNewArticle] = useState({
        title: "",
        date: "",
        readingTime: "",
        author: "",
        message: "",
        imageUrl: ""
    });

    const handleChangeArticle = (e) => {
        setNewArticle((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

        const changeMessageHandler = (e) => {
            setNewArticle((prevState) => ({
                ...prevState,
                message: e.target.value
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
            //        
            // }
        };
    
    const handleMakeArticle = ()=> {
        axios.post('http://localhost:8000/articles', {
            id: 9,
            imageUrl: newArticle.imageUrl,
            title: newArticle.title,
            readingTime: newArticle.readingTime,
            date: newArticle.date,
            author: newArticle.author,
            content: newArticle.message,
        })
    }
        return (
            <>
                <Navbar />
                <div className={styled.ArticleWrapper}>
                    <div className="container">
                        <h4>ساخت مقاله</h4>
                        <Input name="title" label="عنوان" handleChange={handleChangeArticle} />
                        <Input name="date" label="تاریخ" handleChange={handleChangeArticle} />
                        <Input name="readingTime" label="مدت زمان خواندن" handleChange={handleChangeArticle} />
                        <Input name="uathor" label="نویسنده" handleChange={handleChangeArticle} />
                        <Input name="imageUrl" label="عکس مقاله" handleChange={handleChangeArticle} />
                        <Textarea label="متن" handleChange={changeMessageHandler} />

                        <div className={styled.btnParent}>
                        <button onClick={handleMakeArticle}>ساختن مقاله</button>
                       </div>
                    </div>
                </div>
                <Footer />
            </>
        )
}
export default CreateArticle;