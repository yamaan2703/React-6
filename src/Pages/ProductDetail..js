import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductsDetails() {
  const params = useParams();
  const productId = params["id"];
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        console.log(products)
    })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (

    <>
    <div className="main-det">
    <div className="pro-details text-center p-5">
      <img src={products.image} width="20%"></img>
      <h5 className="pt-5"><span>Products:</span> {products.title}</h5>
      <h5><span>Prics:</span> {products.price}</h5>
      <h5><span>Category:</span> {products.category}</h5>
      {/* <h5><span>Rating:</span> {products.rating}</h5> */}
      <h5><span>Description:</span> {products.description}</h5>
    </div>
    </div>
    </>
  );
}
