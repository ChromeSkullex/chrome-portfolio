import React from 'react';
import SlideShow from "../components/SlideShow/SlideShow";
import images from '../components/Jsons/Images.json';
import GridGallery from "../components/GridGallery/GridGallery";

function Home() {
    return (
        <div>

            <SlideShow images={images.categories.homepage}/>
            {/*<GridGallery />*/}

        </div>
    );
}

export default Home;