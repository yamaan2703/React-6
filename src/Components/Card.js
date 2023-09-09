import { useState, useEffect } from "react";
import Button from "../Components/Button";
import axios from "axios";
// import { Box, Typography } from "@mui/material"; 
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

const Card = ({ title, imgURL }) => {
  const [record, setRecord] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //     getData();
  // }, []);

  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setRecord([...res.data]);
      })
      .catch((err) => {
        console.error(err); 
      });
  };

  // const clickCard = (id) => {
  //   navigate(`/Card/${id}`); 
  // };

  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <img className="card-img" src={imgURL} alt={title} />
      <Button buttonValue="Details." getData={()=>{getData()}} /> 

      {/* {record.map((x, i) => (
        <Box
          onClick={() => clickCard(x.id)}
          key={i}
          style={{
            padding: 10,
            backgroundColor: "lightgrey",
            marginBottom: 10,
            cursor: "pointer", 
          }}
        >
          <Typography>{x.title}</Typography>
          <Typography>{x.body}</Typography>
          <Typography>{x.userId}</Typography>
        </Box>
      ))} */}
     {/* {record.map ((x,i) => {
      <div
      onClick={() =>}
      >

      </div>
     })} */}
    </div>
  );
};

export default Card;




