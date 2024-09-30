  import '../Astyles/Areport.css'
  import { MdOutlineFileDownload } from "react-icons/md";
  
  const Areport = () => {
    return(
        <>
        <div className='report-div'>
            <div className='last-report'>
                <h3>Last Reports</h3>
                <div className='current-day'>
                <div className='cuurent-div'>Current day</div>
                <div className='download-box'>
                    <MdOutlineFileDownload/>
                </div>
                </div>
              
            </div>
            <div className='date-div'>
                <p>Date,time</p>
                <p>Report message</p>
                <p>Device</p>
                <p>Status</p>
            </div>
            <div className='time-div'>
                <p>22 Sep. 2020, 12:34</p>
                <p>NS Connection established</p>
                <p>Base station</p>
                <button>Activated</button>
            </div>
            <div className='time-div'>
                <p>22 Sep. 2020, 12:34</p>
                <p>NS Connection established</p>
                <p>Base station</p>
                <button>Activated</button>
            </div>
            <div className='time-div'>
                <p>22 Sep. 2020, 12:34</p>
                <p>NS Connection established</p>
                <p>Base station</p>
                <button>Activated</button>
            </div>
            <div className='time-div'>
                <p>22 Sep. 2020, 12:34</p>
                <p>NS Connection established</p>
                <p>Base station</p>
                <button>Activated</button>
            </div>
        </div>
        </>
    )
   }

   export default Areport