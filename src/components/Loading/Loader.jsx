import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Loader () {
    
    const [increase, setIncrease] = useState(0);

    const inc = ()=>{
        setIncrease(increase+1);
    }
    const dec = ()=>{
        setIncrease(increase-1);
    }


    return (
        <>
            <Navbar />

            <div className='loadingWrapper'>
                <div className="container">
                <button onClick={inc}>افزایش</button>
                <div>{increase}</div>
                <button onClick={dec}>کاهش</button>
                </div>
            </div>

            <Footer />
        </>  
    )
}

export default Loader;