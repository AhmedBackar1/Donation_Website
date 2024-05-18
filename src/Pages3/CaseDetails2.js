import React from 'react'
//import { donRequests } from "../helpers/DonationReqList";
import { Link } from 'react-router-dom';
import Details from "../components3/DetailsCases";
import "../styles3/casedetails.css"
import Clothes from "../assests/clothes.jpg";
import FilterBar from '../components3/FilterBar';
import Navbar from "../components3/DoctorNavBar";
import Footer from "../components3/Footer";
import OpenLayersMap from '../components3/OpenLayersMap';

function CaseDetails2() {

    const longitude = 31.2357; // Example longitude value
    const latitude = 30.0444;
    const donRequests = [
        { patientname: "Omar", age: "27", gender: "Male",  weight: "70KG", address: "20, Makka Street, Dokki, Giza, Egypt", organizationname: "Al Waha Hospital", medicalspecialty: "Surgery", casedescription: "Broken leg" },
    ];

    // Filter requests based on certain criteria

    return (
      <div className="casedetails2">
        <Navbar />
        <FilterBar/>
          <h1 className="listTitle">Cases Donation Requests</h1>
          {donRequests.length > 0 ? (
              <div className="thelist">
                  {donRequests.map((thing, key) => (
                      <Details 
                          key={key}
                          patientname={thing.patientname} 
                          age={thing.age} 
                          gender={thing.gender}
                          weight={thing.weight} 
                          address={thing.material}
                          organizationname={thing.organizationname}
                          medicalspecialty={thing.medicalspecialty}
                          casedescription={thing.casedescription}
                      />
                  ))}
              </div>
          ) : (
              <div className="noItemsFound">
                  No clothes donation requests found.
              </div>
          )}
          <div className="mapContainer">
            <OpenLayersMap coordinates={[longitude, latitude]} />
            </div>
          <Link to="/casefulfilled">
                <button>FulFill Case</button>
            </Link>
            <Footer/>
      </div>
  );
}

export default CaseDetails2
