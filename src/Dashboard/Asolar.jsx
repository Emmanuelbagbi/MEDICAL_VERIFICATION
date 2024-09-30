import '../Astyles/Asolar.css'
import AlChart from './LineChart'
  
  const Asolar = () => {
    return(
        <>
        <div className='solar-div'>
            <div className='gen-div'>
            <p>Solar generation and consumption</p>
            <div className='cuurent-div'>
               Current day
            </div>
            </div>

            <div className='chart-first'> 
                <div className='tg-div'>

                <div className=''>
               <p className='gene-txt'>Total Generation</p>
               <h1 className='con-num'>17.86</h1>
               <div className='min-max'>
               <p>MIN <strong className='red-txt'>2.5</strong></p>
               <p>MAX <strong className='green-txt'>13.7</strong> </p>
               </div>
             
                </div>
                <div>
                <p className='gene-txt'>Total Consumtion</p>
               <h1 className='con-num'>3.2</h1>
               <div className='min-max'>
               <p>MIN <strong className='red-txt'>2.5</strong> </p>
               <p>MAX <strong className='green-txt'>13.7</strong> </p>
               </div>
                </div>

                </div>

                <div className='chart-box'>
              <AlChart/>
               </div>
            </div>

            
         
        </div>
        </>
    )
   }

   export default Asolar