import { Fragment } from "react"

const newMessage = "Geo!!!"


const getResult = (a,b) => {
    return a + b;
}
export const FirstApp = () => {

    
    return(
        <>
            <h1>{  getResult(1,9) }</h1>
            <p>Soy con subtitulo</p>
        </>
    )
}