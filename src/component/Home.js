import React,{useState,useEffect,useRef} from 'react'
import '../style/Home.css'
import Map from '@arcgis/core/Map';
import axios from 'axios';
import MapView from '@arcgis/core/views/MapView';


function Home() {
    const [textNumber, setTextNumber] = useState(1);
    const [textHieght, settextHieght] = useState(120);
    const [view, setView] = useState(null);
    const [lattude, setlattude] = useState();
    const [longitude, setlongitude] = useState();



    const expandText =(textIndex)=>{
        setTextNumber(textIndex)
    }
    
    const mapDiv = useRef(null);

    useEffect(() => {
        if (mapDiv.current) {
            const map = new Map({
              basemap: 'topo-vector' // Specify basemap type here (e.g., "streets", "satellite", "topo-vector", etc.)
            });
      
            const mapView = new MapView({
              container: mapDiv.current,
              map: map,
              center: [29.0, -31.5], // Longitude, Latitude for Transkei
              zoom: 8 // Adjust zoom level as needed for Transkei
            });

            setView(mapView);
      
            // Cleanup the map view when the component is unmounted
            return () => {
              if (mapView) {
                mapView.destroy();
              }
            };
          }
    
     
    }, []);

     // Function to zoom to a specific location
    const zoomToLocation = (longitude, latitude) => {
        if (view) {
        view.goTo({
            center: [longitude, latitude],
            zoom: 10
        });
        }
    };

    const searchPlace = (longitude, latitude) =>{
        zoomToLocation(longitude, latitude)
        axios.get('https://api.example.com/data')
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.error('There was an error!', error);
        });

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
                            <input onChange={(e)=>setlattude(e.target.value)} placeholder='Latitude' type='text'/>
                            <input onChange={(e)=>setlongitude(e.target.value)} placeholder='Longitude' type='text'/>
                            <button onClick={()=> zoomToLocation(longitude,lattude)}>
                                Submit Map
                            </button>
                        </div>

                        <div className="mapDiv" ref={mapDiv}></div>
            
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
                                Legal Compliance
                                    <i className="lni lni-chevron-up" onClick={()=>expandText(1)} ></i>
                                </h6>
                                <p style={{height: textNumber == 1 ? textHieght + "px" :0}}>
                                Farmers must comply with various environmental laws, including the National Forests Act and the National Environmental Management Act (NEMA). These laws require farmers to manage forests sustainably, obtain necessary permits for afforestation, and adhere to regulations aimed at protecting water resources and biodiversity.
                                </p>
                            </div>
                        </div> 
                        <div className='require_details'>
                            <div className='progress_bar bar-passed'></div>
                            <span className='number-passed'>2</span>
                            <div className='require_text'>
                                <h6>
                                Water Use Authorization
                                    <i className="lni lni-chevron-up" onClick={()=>expandText(2)} ></i>
                                </h6>
                                <p style={{height: textNumber == 2 ? textHieght + "px" :0}}>Afforestation is considered a stream flow reduction activity under the National Water Act. Farmers must obtain a water use license for commercial afforestation. This is crucial because afforestation can impact water availability in the area, and proper management is required to balance water use..</p>
                            </div>
                        </div> 
                        <div className='require_details'>
                            <div className='progress_bar bar-failed'></div>
                            <span className='number-failed'>2</span>
                            <div className='require_text'>
                                <h6>
                                Conservation of Agricultural Resources
                                    <i className="lni lni-chevron-up" onClick={()=>expandText(3)} ></i>
                                </h6>
                                <p style={{height: textNumber == 3 ? textHieght + "px" :0}}>Farmers must comply with the Conservation of Agricultural Resources Act (CARA), which emphasizes soil health and the control of invasive species. Afforestation activities must be managed to prevent soil erosion and maintain soil productivity.</p>
                            </div>
                        </div> 

                        <div className='require_details'>
                            <div className='progress_bar bar-failed'></div>
                            <span className='number-failed'>2</span>
                            <div className='require_text'>
                                <h6>
                                Invasive Species Control

                                    <i className="lni lni-chevron-up" onClick={()=>expandText(4)} ></i>
                                </h6>
                                <p style={{height: textNumber == 4 ? textHieght + "px" :0}}>Farmers must The National Environmental Management: Biodiversity Act (NEMBA) requires farmers to control alien and invasive species. Farmers must ensure that their afforestation activities do not contribute to the spread of invasive species, which can harm local ecosystems..</p>
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
