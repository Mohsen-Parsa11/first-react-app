import styled from "./article.module.css"
import article from "./../../assets/images/people2.jpg"

function Article (props) {
    // console.log(props.article.title)
    return (
        <div className={styled.articleWrapper}>
            <img src={article} alt="photo" />
            <h5>{ props.article.title}</h5>
        <p>خواندن در {props.article.readingTime} دقیقه</p>
        </div>
    );
}

export default Article;