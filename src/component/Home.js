import React,{useState} from 'react'
import '../style/Home.css'

function Home() {
    const [textNumber, setTextNumber] = useState(1);
    const [textHieght, settextHieght] = useState(120);

    const expandText =(textIndex)=>{
        setTextNumber(textIndex)
    }
    

  return (
    <div className='home'>
        <div className='top-bar_holder'>
            <div className='container'>
            <div className='top-bar'>
                <p>appName</p>
                <div className='user-details'>
                    <div className=''>
                        <span>Jane Doe</span>
                        <span>Organization</span>
                    </div>
                </div>
            </div>
   
            <h2>Making Environmental guidlines for forestry easy for farmers </h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl purus, lobortis in lacus a, congue iaculis mi. Aliquam at magna mi. Pellentesque vulputate ullamcorper nunc vitae fringilla. Donec efficitur nulla ac gravida malesuada. Nullam tincidunt ultricies tempor. Curabitur augue libero.</p>
            </div>
           
        </div>
        <div className='view-wrapper'>
            <div className='container'>
                <div className='row'>
                    <div className='map-holder'>
                        {/* iframe */}
                        <h4 >Land use map</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl purus, lobortis in lacus a, congue iaculis mi. Aliquam at magna mi. Pellentesque vulputate ullamcorper nunc vitae fringilla.</p>

                        <h3>Search area of interest:</h3>
                        <div className='search-wrapper'>
                            <input placeholder='Latitude' type='text'/>
                            <input placeholder='Longitude' type='text'/>
                            <button>
                                Submit Map
                            </button>
                        </div>

                        <iframe>

                        </iframe>
            
                        <div className="user_report">
                            <h2>Map suitability report </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl purus, lobortis in lacus a, congue iaculis mi. Aliquam at magna mi. Pellentesque vulputate ullamcorper nunc vitae fringilla
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl purus, lobortis in lacus a, congue iaculis mi. Aliquam at magna mi. Pellentesque vulputate ullamcorper nunc vitae fringilla
                            </p>
                        </div>
                    </div>
                    <div className='require-holder'>
                        <h4>Check list requirement</h4>
                        <div className='require_details'>
                            <div className='progress_bar bar-passed'></div>
                            <span className='number-passed'>1</span>
                            <div className='require_text'>
                                <h6>
                                    Soil requirments
                                    <i className="lni lni-chevron-up" onClick={()=>expandText(1)} ></i>
                                </h6>
                                <p style={{height: textNumber == 1 ? textHieght + "px" :0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl purus, lobortis in lacus a, congue iaculis mi. Aliquam at magna mi. Pellentesque vulputate ullamcorper nunc vitae fringilla.</p>
                            </div>
                        </div> 
                        <div className='require_details'>
                            <div className='progress_bar bar-passed'></div>
                            <span className='number-passed'>2</span>
                            <div className='require_text'>
                                <h6>
                                    Soil requirments
                                    <i className="lni lni-chevron-up" onClick={()=>expandText(2)} ></i>
                                </h6>
                                <p style={{height: textNumber == 2 ? textHieght + "px" :0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl purus, lobortis in lacus a, congue iaculis mi. Aliquam at magna mi. Pellentesque vulputate ullamcorper nunc vitae fringilla.</p>
                            </div>
                        </div> 
                        <div className='require_details'>
                            <div className='progress_bar bar-failed'></div>
                            <span className='number-failed'>2</span>
                            <div className='require_text'>
                                <h6>
                                    Soil requirments
                                    <i className="lni lni-chevron-up" onClick={()=>expandText(3)} ></i>
                                </h6>
                                <p style={{height: textNumber == 3 ? textHieght + "px" :0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl purus, lobortis in lacus a, congue iaculis mi. Aliquam at magna mi. Pellentesque vulputate ullamcorper nunc vitae fringilla.</p>
                            </div>
                        </div> 
                        <div className='require_details'>
                            <div className='progress_bar bar-failed'></div>
                            <span className='number-failed'>2</span>
                            <div className='require_text'>
                                <h6>
                                    Soil requirments
                                    <i className="lni lni-chevron-up" onClick={()=>expandText(4)} ></i>
                                </h6>
                                <p style={{height: textNumber == 4 ? textHieght + "px" :0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl purus, lobortis in lacus a, congue iaculis mi. Aliquam at magna mi. Pellentesque vulputate ullamcorper nunc vitae fringilla.</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home
