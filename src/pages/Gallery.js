import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar'
import MasonryLayout from "../components/MasonryLayout/MasonryLayout";
import images from '../components/Jsons/Images.json';

function Gallery() {

    const filterImagesByYear = () => {

            return (

                    <Container >
                        <h3 style={{marginTop: 60}}>2023</h3>
                        <MasonryLayout images={images.categories.y_one}/>
                        <h3 style={{marginTop: 60}}>2022</h3>
                        <MasonryLayout images={images.categories.y_two}/>
                        <h3 style={{marginTop: 60}}>2021</h3>
                        <MasonryLayout images={images.categories.y_three}/>
                        <h3 style={{marginTop: 60}}>2020</h3>
                        <MasonryLayout images={images.categories.y_four}/>
                    </Container>
            );
        }

    return (
        <div>

            <div className="d-flex justify-content-center">
                <Navbar bg="light" variant="light" className="w-100 justify-content-center" />
            </div>
            {filterImagesByYear()}

        </div>
    );
}

export default Gallery;