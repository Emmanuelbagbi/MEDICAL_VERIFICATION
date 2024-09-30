import Otherside from "./Otherside"
import Sidebar from "./Sidebar"
import '../Astyles/dashboard.css'

   const Dashboard = () => {
    return(
        <>
        <div className="dashboard-div">
            <div className="sidebar-div">
            <Sidebar/>
            </div>
        <Otherside/>
        </div>
        </>
    )
   }

   export default Dashboard