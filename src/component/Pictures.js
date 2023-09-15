import React from 'react';
import Picture from './Picture'

export default function Pictures(){
    //const [myTimer,setMyTimer]=React.useState(null);
    
    const[images, setImages]=React.useState([
        'a.jpg',
        'b.png',
    ]);
    const [image,setImage]=React.useState(null);
    function ImagesComponent(){

        return images.map((name,index)=>{
            return <Picture index={index}  imagename={name}/>;}
        )
        

    }
    function handleImageName(event){
        setImage(event.target.value);
    }
    function addImageName(){
        let newimages=[...images,image];
        setImages(newimages);

    }
    
    React.useEffect(()=>{

            const myTimer = setInterval(() => {
                console.log('timer appele')
             }, 1000);
            return ()=>{console.log('Picture demonte');clearInterval(myTimer);}
        },[]
    );
    
    return (
        <div>
        <div className="flex items-center justify-between">
            <ImagesComponent/>

        </div>
        <div >
            <input type="text" className="border border-gray-600" onChange={handleImageName}/>
            <button type ="submit" onClick={addImageName}>Image name</button>
        </div>
        </div>


    );


}
/*class Picture extends React.Component {
    constructor(props){
        super(props);
        this.state = {timer:null};
    }
    componentWillUnmount(){
        clearInterval(this.state.timer);
        this.setState({timer:null}); 
        console.log('componentWillUnmount');
    }
    componentDidMount(){
        this.setState({timer:setInterval(() => console.log('timer appelé'), 1000)});
    }
    render(){
        return(        
        <div>
            <img  className="w-40 mx-auto" alt="shunks" src='https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg' ></img>
        </div>
        )
    }


}*/