import Sailboat from "./Sailboat";
import Rates from "./Rates"; 
import ToAdd from "./ToAdd";



const HomePage = ({innerText})=> {
    
    return (
      <div className='App'>
          <Sailboat/>
          <h3>Welcome to Windy Cove Sailing Lessons! </h3>
          <Rates/>
          <ToAdd></ToAdd>
      </div>
    );
  }
  
  export default HomePage;