import React from 'react';

const ImageList= (props)=>{
    const image= props.images.map((image)=>{
        // eslint-disable-next-line
        return (
            <div className="img-view" key={image.id}>
                <img src={image.urls.regular}></img>
            </div>
        );  
    })

return <div className="img-container">{image}</div>
}

export default ImageList;