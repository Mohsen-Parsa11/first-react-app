import Navbar from "../Navbar/Navbar";
import styled from "./notFound.module.css"


function NOTFOUND () {
    return (
        <div>
            <Navbar />
            <div className={styled.parentWrapper}>
            <h1>404</h1>
            </div> 
        </div>
    )
}

export default NOTFOUND;    