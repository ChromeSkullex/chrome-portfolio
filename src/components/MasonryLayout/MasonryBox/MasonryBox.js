import styles from "./MasonryBox.module.css"
import {PropTypes} from 'prop-types';
import {useState} from "react";
import images from "../../Jsons/Images.json"
import {Button} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const MasonryBox = ({imgTitle, imgSrc, userDate, imgIndex}) =>{
    const images_map = () =>{
        return images.categories.all.map(item => item.src)
    }
    const [data, setData] = useState({img: '', i: 0});
    const imageAction = (action) =>{
        let i = data.i;
        if (action === 'next-img'){
            let imgArr = images_map();
            let curI = i+1;
            if (curI+1> imgArr.length){
                curI=0;
            }
            console.log(imgArr[curI], curI)

            setData({img: imgArr[curI], i: curI});
            console.log(data.img, data.i)
        }
        else if (action === 'prev-img'){
            let imgArr = images_map();
            let curI = i-1;
            if (curI< 0){
                curI=imgArr.length-1;
            }
            console.log(imgArr[curI], curI)

            setData({img: imgArr[curI], i: curI});
            console.log(data.img, data.i)
        }
        if (!action){
            setData({img: '', i: 0})
        }

    }
    const handleClick = () => {
        // Lightbox
        setData({img: imgSrc, i: imgIndex});

    };

    return (
        <>
            {
                data.img &&
                <div style={
                    {
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.9)',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        zIndex: 9999,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden'

                    }
                } >
                    <div className={`${styles["wholebox"]}`}>


                        <button style={{position:'absolute', top: '10px', right: '10px'}} onClick={() => imageAction()}  className={`${styles["close-arrow"]}`}>
                            <i className="bi bi-x-circle"></i></button>
                        <button onClick={() => imageAction('prev-img')} className={`${styles["arrows"]} position-absolute top-50 start-0 translate-middle-y ms-3`} >
                            <i className="bi bi-chevron-left"></i>

                        </button>

                        <img src={data.img} style={{width: '90vh', height: '90vh', objectFit: 'contain' }} alt={"sh"}/>
                            <button onClick={() => imageAction('next-img')}  className={`${styles["arrows"]} position-absolute top-50 end-0 translate-middle-y me-3`} >
                                <i className="bi bi-chevron-right"></i>
                            </button>
                    </div>

                </div>
            }

        <div className={styles["my-masonry"]}  onClick={handleClick}>
            <img src={imgSrc} style={{ width: "100%"}} alt="" />
            <div className={`${styles["my-masnry-description"]} flex`}>
                <div className={`${styles["my-masnry-user-box"]} flex align-items-center`}>
                </div>
            </div>
        </div>
        </>
    )
}


// validate MasonryBox component
MasonryBox.propTypes = {
    imgTitle: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    userDate: PropTypes.string.isRequired,
}

export default MasonryBox