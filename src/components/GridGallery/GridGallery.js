import React from "react";
import styles from "./GridGallery.module.css"
import Container from "react-bootstrap/Container";
import GridBox from "./GridBox/GridBox";
import { Slide } from 'react-slideshow-image';
import imagesJSON from "../Jsons/Images.json"
import 'react-slideshow-image/dist/styles.css'
import {Button, Col, Row} from "react-bootstrap";
const GridGallery = () => {
    const images = imagesJSON.categories.homepage
    return (
        <div className={`${styles["container"]}`}>
            <Row className={`${styles["container-row"]}`}>
                <Col>a</Col>
                <Col>b</Col>
                <Col>c</Col>
            </Row>
            <Row>
                <Col>a</Col>
                <Col>b</Col>
                <Col>c</Col>
            </Row>
        </div>
    )
}

export default GridGallery;