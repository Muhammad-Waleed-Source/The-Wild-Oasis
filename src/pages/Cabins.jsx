import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  const [cabins, setCabins] = useState([]);   // state to store fetched data
  const [error, setError] = useState(null);   // optional: state to handle errors

  useEffect(() => {
    getCabins()
      .then((data) => setCabins(data))        // store data in state
      .catch((err) => setError(err.message)); // store error in state
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (cabins.length === 0) {
    return <p>Loading cabins...</p>;
  }

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>

      <img src={cabins[0].image} alt="Cabin" />
    </Row>
  );
}


export default Cabins;
