import React from 'react'
//import { toysRequests } from "../helpers/ListToys";
import { Link } from 'react-router-dom';
import Details from "../components3/DetailsFood";
import "../styles3/Details.css"
import Food from "../assests/food.png";
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";

function FoodDetails() {

    const donRequests = [
        { image: Food, name: "Spagetti", category: "Food",  type: "Pasta", quantity: "3 packets" },
    ];

    return (
      <div className="fooddetails">
        <Navbar />
          <h1 className="listTitle">Toys Donation Requests</h1>
          {donRequests.length > 0 ? (
              <div className="thelist">
                  {donRequests.map((thing, key) => (
                      <Details 
                          key={key}
                          image={thing.image} 
                          name={thing.name} 
                          category={thing.category}
                          type={thing.type}
                          quantity={thing.quantity}
                      />
                  ))}
              </div>
          ) : (
              <div className="noItemsFound">
                  No toys donation requests found.
              </div>
          )}
          <Link to="/selectquan1">
                <button>Donate</button>
            </Link>
            <Footer/>
      </div>
  );
}

export default FoodDetails
