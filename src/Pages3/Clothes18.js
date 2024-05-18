import React from 'react'
//import { donRequests } from "../helpers/DonationReqList";
import ItemClothes from "../components3/Items";
import "../styles3/Clothes.css"
import Clothes from "../assests/clothes.jpg";
import FilterBar from '../components3/FilterBar';
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";

function Clothes18() {
    const donRequests = [
        { image: Clothes, name: "Shirt", category: "Clothes" , linkTo:"/femclothesdetails"},
        { image: Clothes, name: "Dress", category: "Clothes", linkTo:"/femclothesdetails" }
    ];

    // Filter requests based on certain criteria

    return (
      <div className="clothes18list">
        <Navbar />
        <FilterBar/>
          <h1 className="listTitle">Clothes Donation Requests</h1>
          {donRequests.length > 0 ? (
              <div className="thelist">
                  {donRequests.map((thing, key) => (
                      <ItemClothes 
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
                  No clothes donation requests found.
              </div>
          )}
          <Footer/>
      </div>
  );
}

export default Clothes18
