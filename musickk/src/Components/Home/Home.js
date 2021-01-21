import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [english, setEnglis] = useState([]);
  const [hindi, setHindi] = useState([]);
  const [tamil, setTamil] = useState([]);
  useEffect(() => {
    const fetchApi = () => {
      const dt = fetch(`http://localhost:8008/mainSongs`)
        .then((fn) => {
          return fn.json();
        })
        .then((resp) => {
          setData(resp);
          setEnglis(resp.ENG);
          setHindi(resp.HIN);
          setTamil(resp.TAM);
        })
        .catch((err) => {
          return setData(err);
        });
    };

    fetchApi();
  }, []);
  // console.log(data);
  // console.log(hindi);
  // console.log(english);

  return (
    <>
      {data && (
        <main className="main__page">
          <h1 className="home__title">
            <span>Musickkkk</span>
          </h1>
          <div className="song__category">
            <div className="song__type song__hindi song__similar">
              <h1>Hindi Songs</h1>
              <Link
                style={{ textDecoration: "none" }}
                to={{ pathname: "/Hindi", state: hindi }}
              >
                <h4>Get Songs</h4>
              </Link>
            </div>
            <div className="song__type song__hindi song__similar">
              <h1>Tamil</h1>
              <Link
                style={{ textDecoration: "none" }}
                to={{ pathname: "/Tamil", state: tamil }}
              >
                <h4>Get Songs</h4>
              </Link>
            </div>
            <div className="song__type song__english song__similar">
              <h1>English </h1>
              <Link
                style={{ textDecoration: "none" }}
                to={{ pathname: "/English", state: english }}
              >
                <h4>Get Songs</h4>
              </Link>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Home;
