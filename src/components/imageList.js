import React from "react"

const ImageList = (props) => {
    const imageTags=props.images.map((image,index) => {
                return <a href={image.pageURL} key={index}><img src={image.webformatURL} className="image" alt={image.tags} key={image.id}></img></a>
    })
    

    return (
        <div>
            {imageTags}
        </div>
        
    )
}
 
export default ImageList