   import '../Astyles/Aheader.css'
   import { MdNotificationsNone } from "react-icons/md";
import ToggleButton from './toggleButton';

   const Aheader =  () => {
    return(
        <>
       <nav>
        <p>Dashboard</p>
       <div className='toggle-not'>
        <div>
            <ToggleButton/>
        </div>
        <div>
        <div className='notif-circle'>
       <MdNotificationsNone/>
        </div>
        <div className='red-name'>
            9
        </div>
        </div>
        </div>
       </nav>
        </>
    )
   }

   export default Aheader