  import '../Astyles/Asidebar.css'
  import { BiBarChartAlt2 } from "react-icons/bi";
  import { BiDevices } from "react-icons/bi";
  import { FiDatabase } from "react-icons/fi";
  import { BsGraphUp } from "react-icons/bs";
  import { IoDocumentOutline } from "react-icons/io5";
  import { AiOutlineFolderOpen } from "react-icons/ai";
  import { MdOutlineSettings } from "react-icons/md";
  import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

  const Sidebar = () => {
    return(
        <>
        <aside className=''>
            <div className='logo-div'>
                <img src="dashboard-img.png" alt="" />
                <h2>Data Solar</h2>
            </div>
            <div className='sidebar-inner'>
                <p>Admin tools</p>
                <div className='active'>
                    <BiBarChartAlt2/>
                    Dashboard
                </div>
                <div className='de-inner'>
                <div>
                    <BiDevices/>
                    Devices
                </div>
                <div>
                    <FiDatabase/>
                    Payout
                </div>
                <div>
                    <BsGraphUp/>
                    Statement
                </div>
                <div>
                    <IoDocumentOutline/>
                    Documents
                </div>
                <div>
                    <AiOutlineFolderOpen/>
                    Reports
                </div>
                <div>
                    <MdOutlineSettings/>
                    Settings
                </div>
                </div>
            </div>
            <div className='exit-div'>
                <p>Other</p>
                <div className='tommy-div'>
                    <img src="profile.jpg" alt="" />
                    Tommy Lee Jones
                    </div>
                <div className='exit-box'>
                    <MdOutlineSubdirectoryArrowRight/>
                    Exit
                    </div>
            </div>
        </aside>
        </>
    )
  }

  export default Sidebar