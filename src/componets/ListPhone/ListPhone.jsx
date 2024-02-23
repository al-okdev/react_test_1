import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function ListPhone(){

    const [data, getData] = useState([]);
    const URL = "https://dummyjson.com/products"; //https://jsonplaceholder.typicode.com/posts
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = () => {
      fetch(URL)
        .then((res) => res.json())
  
        .then((response) => {
          console.log(response);
          getData(response.products);
        });
    }
  
    return (
  
      <ul>
  
        {data.map(item => (
          <li key={item.id}>
            <Link to={`/phone/${item.id}`}>

              {item.title} === {item.price}<br/>
              <img src={item.thumbnail} />
              
              </Link>
          </li>
        ))}
        
      </ul>
    )
  }