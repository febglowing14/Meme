import trollface from '../image/two.webp';
export default function Main(){
    return (
        <div>
        
        <div id='container'>
            <label>Top Text 
                
                <input type="text" id="topText" placeholder="one does not simplt"/>
                </label>
                
                <br />
                 <label>Bottom Text 
                    
                    <input type="text" id="bottomText" placeholder="walk into mordor"/>
                    </label> 
                    <br/>
                <button>Get a new meme image</button>
        </div>
        <br />
        
        <div className="meme">
            <img  id='cat'src={trollface}/>
           
            </div>
            </div>
    )
}