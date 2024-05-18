import React from 'react'
import { Link } from 'react-router-dom';
import Details from "../components3/DetailsClothes";
import "../styles3/Clothes.css"
import FilterBar from '../components3/FilterBar';
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";

function FemClothesDetails() {
    const donRequests = [
        { gender: "Female", season: "Summer",  material: "Cotton", quantity: "3", age: "18 years", category: "Clothes" },
    ];

    // Filter requests based on certain criteria

    return (
      <div className="femclothesdetails">
        <Navbar />
        <FilterBar/>
          <h1 className="listTitle">Clothes Donation Requests</h1>
          {donRequests.length > 0 ? (
              <div className="thelist">
                  {donRequests.map((thing, key) => (
                      <Details 
                          key={key}
                          category={thing.category}
                          gender={thing.gender} 
                          season={thing.season} 
                          material={thing.material}
                          quantity={thing.quantity}
                          age={thing.age}
                      />
                  ))}
              </div>
          ) : (
              <div className="noItemsFound">
                  No clothes donation requests found.
              </div>
          )}
          <Link to="/selectquan1">
                <button>Donate</button>
            </Link>
            <Footer/>
      </div>
  );
}

export default FemClothesDetails
