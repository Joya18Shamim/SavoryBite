// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Card from "../components/Card";
// import Carousal from "../components/Carousal";

// export default function Home() {
//   const [foodCat, setFoodCat] = useState([]);
//   const [foodItem, setFoodItem] = useState([]);

//   const loadData = async () => {
//     let response = await fetch("http://localhost:5000/api/foodData", {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     response = await response.json();

//     setFoodItem(response[0]);
//     setFoodCat(response[1]);
//   }

//   useEffect(() => {
//     loadData();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <Carousal />
//       <div className='container'>
//         {
//           foodCat.length !== 0
//             ? foodCat.map((data) =>{
//               return (<div className="row mb-3">
//                 <div key={data._id} className="fs-3 m-3">
//                   {data.CategoryName}
//                   </div>
//                   <hr />
//                   {foodItem.length !== 0
//                     ?
//                     foodItem.filter((item) => item.CategoryName === data.CategoryName)
//                       .map(filterItems =>{
//                         return (
//                             <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
//                               <Card></Card>
//                               </div>
//                         )
//                       })
//                     )} : <div>No such data found</div>}
                    
//                     </div>
                
//             })
//         }
//       </div>
//       <Footer />
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
// import Carousal from "../components/Carousal";

export default function Home() {
  const [search,setSearch] =useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
      <Navbar />
      </div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{objectFit:"contain !important"}}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{zIndex: "10"}}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search} 
                onChange={(e)=>{setSearch(e.target.value)}}
              />
              {/* <button className="btn btn-outline-success text-white bg-success" type="submit">
                Search
              </button> */}
            </div>
          </div>
          <div className="carousel-item active">
            <img
             src="https://plus.unsplash.com/premium_photo-1677654310449-0b37cb7c83a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

              className="d-block w-100"
              style={{filter: "brightness(30%)"}}
              
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://plus.unsplash.com/premium_photo-1661600619578-2d9e2593bbfc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100"
              style={{filter: "brightness(30%)"}}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1525583280/photo/crunchy-vegetable-taco.jpg?s=2048x2048&w=is&k=20&c=eoIx1Qp0YkKTwoe3MC_zJ4aHU-uQxv7UIgDoppRF-6U="
              className="d-block w-100"
              style={{filter: "brightness(30%)"}}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className='container'>
        {foodCat.length !== 0 ? (
          foodCat.map((data) => (
            <div className="row mb-3" key={data._id}>
              <div className="fs-3 m-3">
                {data.CategoryName}
              </div>
              <hr />
              {foodItem.length !== 0 ? (
                foodItem
                  .filter((item) => (item.CategoryName === data.CategoryName)  && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                  .map((filterItems) => (
                    <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                      <Card foodItem = {filterItems} 
                        // options = {filterItems.options[0]}
                        item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img}
                        
                      > </Card>
                    </div>
                  ))
              ) : (
                <div>No such data found</div>
              )}
            </div>
          ))
        ) : (
          <div>No categories found</div>
        )}
      </div>
      <Footer />
    </div>
  );
}
