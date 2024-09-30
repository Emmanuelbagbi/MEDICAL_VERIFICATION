
import { PureComponent } from 'react'
import '../Astyles/Adevice.css'
import Apiechart from './PieChart'
 
 const Adevice = () => {
        return(
            <>
            <div className='devices-div'>
                <h3>Active devices</h3>
                <div>
                 <Apiechart/>
                </div>
                <p className='solar-text'>Active Solar panel</p>
                <h1 className='number-text'>765</h1>
                <div className='panel-div'>
                <p>Update panel status:</p>
                <p>Today 12:24:33</p>
                </div>
                <div className='deactive-div'>
                <p>Active</p>
                <p>Deactive</p>
                </div>
                <div className='energy-div'>
                    <p>Energy generation</p>
                    <p>heatmap</p>
                </div>
            </div>
            </>
        )
    }

   export default Adevice