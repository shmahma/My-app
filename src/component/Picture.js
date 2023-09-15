
import React from 'react'

export default function Picture(props){
return(
<div className="relative" key={props.index} >
                
                <button onClick={()=>setImages(images.filter((image,i)=> i !== props.index))}><img  className="w-40 mx-auto" alt="shunks" src={props.imagename} ></img></button>
</div>
)
}