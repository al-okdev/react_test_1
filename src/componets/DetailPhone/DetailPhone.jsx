import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function DetailPhone(){
  const { id } = useParams();

  const [data, getData] = useState([]);

  const URL = "https://dummyjson.com/products/"+id;

  console.log(id);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        console.log(response);
        getData(response);
      });
  }

  //const entries = Object.entries(data);
  //const values = Object.values(data);

  return (
    <>

    {/* {values.map((value, index) => (
      <p>
        {value}
      </p>
    ))} */}

    <p>{data.title}</p>
    <p>Цена: {data.price}</p>
    <img src={data.thumbnail} />

    </>
  )
}