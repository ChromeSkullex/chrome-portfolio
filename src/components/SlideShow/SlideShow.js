import images from '../components/Jsons/Images.json';
import Container from "react-bootstrap/Container";
import {useState} from "react";

const SlideShow = ({images}) =>{
    const [currImg, setCurrImg] = useState(images[0].src)
    console.log(images[0].src);

    return (

        <Container>
            <img src={currImg} />
        </Container>

    );
}
export default SlideShow;