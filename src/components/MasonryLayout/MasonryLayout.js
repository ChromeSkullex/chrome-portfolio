import styles from "./MasonryLayout.module.css"
import MasonryBox from './MasonryBox/MasonryBox';
import Masonry from "react-masonry-css";

// Masonry Component
const MasonryLayout = ({images}) =>{
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    return(
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles["my-masonry-grid"]}
            columnClassName={styles["my-masonry-grid_column"]}

        >
            {images.map((item, index) => (

                <MasonryBox
                    imgTitle={item.title}
                    imgSrc={item.src}
                    userDate={item.data.date}
                    imgIndex = {index}

                />
            ))}
        </Masonry>
    )
}
export default MasonryLayout