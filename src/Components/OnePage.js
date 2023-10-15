// import styled from "styled-components";
import { useState } from "react";
import ImgData from "./data";

// const ImgCont = styled.div`
//     width: 100vw;
//     cursor: default;
// `;


function PageCont () {
    const [ page, setPage ] = useState(0);

    const onClickHandler = () => {
        setPage(page+1);
    }

    return (
        <div>
            <div onClick={onClickHandler}>
            <ImgData num={page} />
            </div>
        </div>
    )
}

export default PageCont;