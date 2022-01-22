import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";
const ImageList = (props) =>{
    const imageTag = props.list.map((image) => {
        return <ImageCard key={image.id} image={image} />
    })

    return (
        <div className="image-list">{imageTag}</div>
    )
}

export default ImageList;