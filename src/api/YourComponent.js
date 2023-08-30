import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData(); // Call the function to fetch post data when the component mounts
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL + '/api/posts');
      const data = await response.json();
      setPosts(data); // Update the 'posts' state with the fetched data
    } catch (error) {
      console.error(error);
      // Handle any errors that occur during the fetch request
    }
  };

  return (
    <div>
      {/* Render the posts in your component */}
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;