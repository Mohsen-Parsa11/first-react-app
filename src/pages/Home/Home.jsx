import Article from "../../components/Article/Article";
import Navbar from "../../components/Navbar/Navbar";
import styled from './home.module.css';
function Home () {


    let articles= [
        {
            "id":1,
            "imageUrl":"",
            "title":"عنوان اول",
            "readingTime":5

        },
        {
            "id":2,
            "imageUrl":"",
            "title":"عنوان دوم",
            "readingTime":4

        },
        {
            "id":3,
            "imageUrl":"",
            "title":"عنوان سوم",
            "readingTime":7

        },
        {
            "id":4,
            "imageUrl":"",
            "title":"عنوان چهارم",
            "readingTime":9

        }
    ]

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