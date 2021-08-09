import {Link} from 'react-router-dom'; 


const Button = ({style, onClick})=> {
    
    return (
      <div>
          <Link to='/Purchase'><button onClick={onClick} style={style} id='button'>Add</button></Link>
      </div>
    );
  }
  
  export default Button; 