import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import Carousel from "../Components/Carousel";
import Navbar from "../Components/Navbar";
import axios from "axios";

export default function Home() {
  document.body.style.backgroundColor = "whitesmoke";
  const [fooditems, setFooditems] = useState([]);
  const [foodtags, setFoodtags] = useState([]);
  const [searchbar, setsearchbar] = useState("");

  const submission = async () => {
    try {
      const response = await axios.get("http://localhost:5000/food/fooditem", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setFooditems(response.data[0]);
      setFoodtags(response.data[1]);
    } catch (error) {
      console.log("error id", error);
    }
  };

  useEffect(() => {
    submission();
  }, []);

  return (
    <>
      <Navbar />
      <Carousel search={setsearchbar} searchval={searchbar} />
      {foodtags.length !== 0 ? (
        foodtags.map((user, index) => (
          <div className="row mb-3" key={index}>
            <h1>
              <b>{user.categoryName}</b>
            </h1>
            <hr />
            {fooditems
              .filter(
                (value) =>
                  value.categoryName === user.categoryName &&
                  value.Name.toLowerCase().includes(searchbar)
              )
              .map((finalVal) => (
                <div className="col-12 col-md-6 col-lg-3" key={finalVal.id}>
                  <Card
                    img={finalVal.img}
                    Name={finalVal.Name}
                    sizes={finalVal.sizeprize}
                    id={finalVal._id}
                  />
                </div>
              ))}
          </div>
        ))
      ) : (
        <div></div>
      )}
      <footer
        className="page-footer font-small blue"
        style={{ background: "black" }}
      >
        <div
          className="footer-copyright text-center py-3"
          style={{ color: "whitesmoke" }}
        >
          © 2023 Copyright:
        </div>
      </footer>
    </>
  );
}
