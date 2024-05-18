import React from 'react'
import { donRequests } from "../helpers3/DonationReqList";
import Items from "../components3/Items";
import "../styles3/Allmeds.css"
import FilterBarMedical from '../components3/FilterBarMedical';
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";
import Medicall from "../assests/medical.png";

function Allmeds() {

    const filteredRequests = [
        {image:Medicall,  name: "panadol", category: "Medical Supplies", linkTo:"/Boardmdetails" },
        {image:Medicall,  name: "paracetemol", category: "Medical Supplies", linkTo:"/Boardmdetails" },
        {image:Medicall,  name: "buscopan", category: "Medical Supplies", linkTo:"/Boardmdetails" },
        { image:Medicall, name: "adol", category: "Medical Supplies", linkTo:"/Boardmdetails" }
    ];

    return (
      <div className="allmeds">
        <Navbar />
        <FilterBarMedical/>
          <h1 className="listTitle">Medication Donation Requests</h1>
          {filteredRequests.length > 0 ? (
              <div className="thelist">
                  {filteredRequests.map((thing, key) => (
                      <Items 
                          key={key}
                          image={thing.image} 
                          name={thing.name} 
                          category={thing.category}
                          linkTo={thing.linkTo}
                      />
                  ))}
              </div>
          ) : (
              <div className="noItemsFound">
                  No medical donation requests found.
              </div>
          )}
          <Footer/>
      </div>
  );
}

export default Allmeds
