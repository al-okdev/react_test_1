import { useState, useEffect } from 'react';

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
            <a href={"phones/2"}> {item.title} === {item.price}<br/><br/>
              <img src={item.thumbnail} />
            </a>
          </li>
        ))}
        
      </ul>
    )
  }