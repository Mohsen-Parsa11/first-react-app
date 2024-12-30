import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styled from "./About.module.css";
import map from "../../assets/images/region.jpg";

function About (){
    return (
        <div>
            <Navbar title="محسن بلاک"/>
            <div className={styled.aboutWrapper}>
                <div className="container">
                <h2>در باره ما</h2>
                <p>
                    حضرت فاطمه زهرا   نه تنها الگویی برای زنان٫ بلکه الگویی برای تمام انسان ها در تمام دوران ها هستند. از عبادت و بندگی ایشان تا ایثار و فداکاری ایشان٫ همه نشان از شخصیت والا و اخلاق کریمانه ی ایشان دارد. برای درک و فهم بهتر این شخصیت عظیم٫  مطالعه آثار معتبری چون «بحارالأنوار»٫ «الکافی»  و «نهج الحیاة» توصیه میشود.
                    بر اساس روایات٫ حضرت خدیجه  مادر بزرگوار حضرت زهرا  در زمان بارداری ایشان از سوی زنان قریش طرد شده بودند. در این دوران٫ خداوند متعال توسط چهار زن از بهشتیان ٫ حضرت مریم  آسیه  حضرت حوا  و کلثوم  حضرت خدیجه را یاری رساندند. این بانوان نورانی به دستور الله متعال در لحظه تولد حضرت زهرا  حضور یافتند و ایشان را یاری کردند.
                </p>
                <h3>فعالیت ما در کدام شهر ها است؟</h3>
                <img src={map} alt="map" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About