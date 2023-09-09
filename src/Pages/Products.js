import Button from "../Components/Button";
import Card from "../Components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        console.log(res.data);
        setProducts([...res.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <div className="section-3">
        <div className="container py-5">
          <div className="sec3-head text-center">
            <h1 className="">Products!</h1>
          </div>
          <div className="feom-product text-center">
            <div className="row">
              {products.map((x, i) => (
                <div className="col-md-3" key={i}>
                  <div className="product-card">
                    {/* <Card /> */}
                    <img src={x.image} width="100%"></img>
                    {/* <p>{x.id}</p> */}
                    <p>{x.title}</p>

                    <button className="">

                      <Link
                        to={`/productsdetails/${x.id}`}
                        className="link-btn"
                      >
                        Go to Details
                      </Link>
                    </button>
                  
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
