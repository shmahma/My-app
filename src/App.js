import React from 'react';
import Picture from './component/Pictures';
function App() {

    const [title,setTitle] = React.useState("coucou les amis");
    const [show,setShow] = React.useState(false);
    const isShowIn = React.useRef(false);
    React.useEffect(() =>console.log("composant app monté"),[]);
    React.useEffect(() =>{
        if(isShowIn.current){
            console.log('show mis a jour');
        }
        else{
            isShowIn.current = true;
        }
    },[show]);
    function handleClick(){
        setShow(!show);
    }
    return (
        <div>
            {console.log("composant app render")}
            <h1>{title}</h1>
            <button className="bg-purple-900 text-white rounded py-2 pw-3" 
            onClick={handleClick}>
            Click!</button>
            {
                show ?
                <Picture/>
                :null
            }
        </div>
    );
    
}
/*class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show:false, title:'Couco'};
        console.log('constructeur appele');
    
    }
    componentDidMount(){
        console.log('component did mount');
        this.setState({title:'composent bien ete monté'});
    }
    componentDidUpdate(){
        console.log('component did update');
    }
    render(){
        return (
        <div>
            <h1>{this.state.title}</h1>
            <button className="bg-purple-900 text-white rounded py-2 pw-3" 
            onClick={()=>this.setState({show:!this.state.show})}>
            Click!</button>
            {
                this.state.show ?
                <Picture/>
                :null
            }
        </div>);
    }

}*/
export default App;