import { useState } from "react";

const useFetch = () => {
    const [data, setData] = useState([]);
    const fetchData = (url) => {
      fetch(url)
        .then(res => res.json())
        .then(dt => setData(dt))
        
    }
    console.log(data)
    return [data, fetchData];
  }

export default useFetch