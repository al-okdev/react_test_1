import { useState, useEffect } from 'react';

export function DetailPhone(){

    const [data, getData] = useState([]);

    const URL = "https://dummyjson.com/products/2"; //https://jsonplaceholder.typicode.com/posts
  
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

    const entries = Object.entries(data);

    for (const [key, value] of entries) {
        if (key == 'title'){
            const titlephone = value;
        }    
    }
  
    return (
        
      <div>
        {data.title}
      </div>
    )
  }