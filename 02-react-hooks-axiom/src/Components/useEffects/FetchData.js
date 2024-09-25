import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const renderCount = useRef(0); // Initialize a ref to keep count of renders
  renderCount.current += 1; // Increment the count on each render
  console.log('FetchData component rendered', renderCount.current);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');       
        setData(response.data);
        setLoading(false);
      } catch (error) {
        if (error.response) {
          setError({
            message: error.response.statusText,
            status: error.response.status,
            body: error.response.data
          });
        } else if (error.request) {
          setError({
            message: 'No response received from the server',
            status: null,
            body: null
          });
        } else {
          setError({
            message: error.message,
            status: null,
            body: null
          });
        }
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log('HI data ',{data})
  console.log('HI loading',{loading})

  if (loading) return <p>Loading...</p>;
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
        {error.status && <p>Status Code: {error.status}</p>}
        {error.body && (
          <pre>{JSON.stringify(error.body, null, 2)}</pre>
        )}
      </div>
    );
  }


  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
