import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar'
import { Nav, NavLink } from "react-bootstrap";
import MasonryLayout from "../components/MasonryLayout/MasonryLayout";
import images from '../components/Jsons/Images.json';

// const years = ['All', 2020, 2021, 2022, 2023];
//
// const YearButton = ({ year, handleClick, isActive }) => {
//     return (
//         <NavLink
//             className={`px-lg-5 py-2 mx-3 border border-2 ${isActive ? 'active' : ''}`}
//             onClick={() => handleClick(year)}
//         >
//             {year}
//         </NavLink>
//     );
// };

function Gallery() {
    //const [year, setYear] = useState('All');
    const [categoryImage, setCategoryImage] = useState(images.categories.all)
   const [showPopup, setShowPopup] = useState(false);
   //  const handleClick = (selectedYear) => {
   //      setYear(selectedYear);
   //  };

    const handleMasonryBoxClick = () => {
        setShowPopup(true);
    };

    const filterImagesByYear = () => {
        // if (year !== 'All') {
        //     return (
        //         <div className="justify-content-center">
        //             <h2 className="">Artworks for {year}</h2>
        //             <Container></Container>
        //         </div>
        //     );
        // } else {

            return (
                // <div className="justify-content-center">
                //     <h2 className="">All Artworks</h2>
                //     {showPopup && (
                //         <div className="popup">
                //             {/* Popup content */}
                //             <h1>Popup content</h1>
                //         </div>
                //     )}
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
                // </div>
            );
        }
    //};

    return (
        <div>

            <div className="d-flex justify-content-center">
                <Navbar bg="light" variant="light" className="w-100 justify-content-center">
                    {/*{years.map((yearOption) => (*/}
                    {/*    <YearButton*/}
                    {/*        key={yearOption}*/}
                    {/*        year={yearOption}*/}
                    {/*        // handleClick={handleClick}*/}
                    {/*        // isActive={yearOption === year}*/}
                    {/*    />*/}
                    {/*))}*/}
                </Navbar>
            </div>
            {filterImagesByYear()}

        </div>
    );
}

export default Gallery;