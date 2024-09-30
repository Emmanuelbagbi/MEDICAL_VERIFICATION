import Adevice from "./Adevice"
import Aheader from "./Aheader"
import Ahero from "./Ahero"
import Areport from "./Areports"
import Asolar from "./Asolar"
import '../Astyles/otherside.css'

  const Otherside = () => {
    return(
        <>
         <div className="color-box">
            <div className="grey-div"></div>
            <div className="darkgrey-div"></div>
          </div>
       
        <div className="otherdiv">
        <div>
        <Aheader/>
        </div>
      <div>
      <Ahero/>
      </div>
       <div className="inner-div">
        <div className="inner-box">
        <Asolar/>
        <Areport/>
        </div>
        <Adevice/>
       </div>
        </div>
    
      
        </>
    )
  }

  export default Otherside