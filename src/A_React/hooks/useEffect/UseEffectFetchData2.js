import React, { useEffect, useState } from "react";
import axios from "axios";
// @ts-ignore
export default function UseEffectFetchData2() {
  const [post, setPost] = useState([]);
  // @ts-ignore
  const [id, setId] = useState(1);
  const [idFromBtn, setIdFromBtn] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromBtn}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [idFromBtn]);

  let handleClick = () => {
    setIdFromBtn(id);
  };
  return (
    <div>
      enter the id you will get post title <br></br>
      <input
        type="text"
        value={id}
        onChange={(e) =>
          setId(
            // @ts-ignore
            e.target.value
          )
        }
      />
      <button type="button" onClick={handleClick}>
        fetch post
      </button>
      <div>{post.title}</div>
    </div>
  );
}
