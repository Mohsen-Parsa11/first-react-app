import styled from "./main.module.css"

// this is main part
function Main () {
    return (
        <div className={styled.main}>
            <div>
                <div>
                    <img src="../../../public/image/people2.jpg" alt="" />
                </div>
                <div>
                    <h1>Lorem, ipsum dolor.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vitae.</p>
                </div>
            </div>
        </div>
    );
}

export default Main;