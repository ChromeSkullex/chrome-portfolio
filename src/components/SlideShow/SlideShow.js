import images from '../Jsons/Images.json';
import Container from "react-bootstrap/Container";
import {useEffect, useState} from "react";
import styles from "./SlideShow.module.css"
import { Parallax, Background } from 'react-parallax';
import {Fade} from "react-slideshow-image";

const SlideShow = ({images}) =>{
    const [imgInt, setImgInt] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (imgInt === images.length - 1){
                setImgInt(0);
            }
            else {
                setImgInt(imgInt + 1);

            }
            console.log("Hello")
        }, 3000)
        return () => {
            clearInterval(intervalId)
        };
    }, []);
    
    return (

        <div>

            <div className={`${styles["parallax"]}`} style={{backgroundImage: `    linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(117, 19, 93, 0.73)),
url(${images[0].src})`}}>
                <h1 >CHROME•SKULLEX</h1> </div>
                {/*<div className={`${styles["parallax"]}`} style={{backgroundImage: `url(${images[1].src})`}} />*/}
                {/*<div className={`${styles["parallax"]}`} style={{backgroundImage: `url(${images[2].src})`}} />*/}
                {/*<div className={`${styles["parallax"]}`} style={{backgroundImage: `url(${images[3].src})`}} />*/}
                {/*<div className={`${styles["parallax"]}`} style={{backgroundImage: `url(${images[4].src})`}} />*/}


        </div>

    );
}
export default SlideShow;