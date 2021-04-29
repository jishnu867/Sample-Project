import React, { useRef, useState } from "react";

export default function Task() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const inputRef = useRef();
  const scrollRef = useRef();

  const scrollTo = (ele) => {
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, value]);
    inputRef.current.value = "";
    scrollTo(scrollRef.current);
  };

  return (
    <div
      style={{
        height: "200px",
        width: "500px",
        border: "1px solid black",
        overflow: "scroll",
      }}
    >
      <form>
        <input type="text" onChange={handleChange} ref={inputRef}></input>
        <input type="submit" value="submit" onClick={handleSubmit}></input>
      </form>
      <div>
        {list.map((item, key) => {
          return (
            <>
              <li key={key}>
                {item}
              </li>
            </>
          );
        })}
      </div>
      <div ref={scrollRef}></div>
    </div>
  );
}
