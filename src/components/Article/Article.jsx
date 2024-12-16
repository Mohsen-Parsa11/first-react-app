import styled from "./article.module.css"
import article from "./../../assets/images/people2.jpg"

function Article () {
    return (
        <div className={styled.articleWrapper}>
            <img src={article} alt="photo" />
            <h5>برنده قهرمان ملی</h5>
            <p>خواندن در ۵ دقیقه</p>
        </div>
    );
}

export default Article;