import React, { useEffect, useState } from "react";
import { fetching } from "./index";
// Displaying data with useState and useEffect

const DisplayingData = () => {
  const [blogs, setBlogs] = useState([]);
  const [pending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    const fetchBlogs = async () => {
      try {
        setIsPending(true);
        const res = await fetching.get("/blogs", { signal: abortCont.signal });
        setBlogs(res.data);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      } finally {
        setIsPending(false);
      }
    };
    fetchBlogs();
    return () => abortCont.abort();
  }, []);

  return (
    <div>
      {pending && <div>Loading...</div>}
      {error && <span>{error.message}</span>}
      {blogs.length > 0 ? (
        <div>
          {blogs.map((blog) => (
            <div key={blog.id}>{blog.title}</div>
          ))}
        </div>
      ) : (
        <div>Could not find resource</div>
      )}
    </div>
  );
};

export default DisplayingData;
