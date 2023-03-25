import React, { useEffect, useState } from "react";
import "./HomeRoute.css";
import Navbar from "./Navbar";
export const HomeRoute = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({ item: "" });
  const [fetControl, setFetchControl] = useState("");
  const [flag, setFlag] = useState(false);
  const [editParameter, seteditParameter] = useState({ flag: false, id: "" });
  const URL = process.env.react_app_URL || "https://note-taker-app-kajy.onrender.com/api/v1/";
  async function addNote(e) {
    e.preventDefault();
    if (input.item) {
      await fetch(URL, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          //   console.log(data.item);
        });
      setFetchControl(input.item);
      setInput({ ...input, item: "" });
    } else {
      alert("Please Write Something Before Add in Note Taker");
    }
  }
  async function edit(e, id) {
    e.preventDefault();
    if (input.item) {
      await fetch(`${URL}${id}`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          //   console.log(data.item);
        });
      flag ? setFlag(false) : setFlag(true);
      seteditParameter({ ...editParameter, flag: false });
    } else {
      alert("Please Write Something Before Add in Note Taker");
    }
    // console.log(id);
  }
  async function Delete(id) {
    await fetch(`${URL}${id}`, { method: "delete" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
      });
    flag ? setFlag(false) : setFlag(true);
  }
  //   console.log(data);
  useEffect(() => {
    fetch(URL, { method: "get" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.items.reverse());
      });
  }, [fetControl, flag]);
  return (
    <div className="main_container">
      <Navbar/>
      
      <div className="logo_title_container">
        <img src={"imgs/logo.png"} alt="logo" />
        <h1 className="app_name">Note Taker</h1>
      </div>
      <form>
        <textarea id="input_field" name="item" type={"text"} value={input.item}  placeholder="write Note here"  onChange={(e) => {setInput({ ...input, item: e.target.value })}}/>
        <button className="add_button" style={{ fontSize: editParameter.flag ? 16 : "" }} onClick={(e) => {editParameter.flag ? edit(e, editParameter.id) : addNote(e)}}>
          {editParameter.flag ? "Save" : "✢"}</button>
      </form>
      {editParameter.flag && (
        <button className="cencel_edit_btn" onClick={() => {  seteditParameter({ ...editParameter,  flag: false, });
           setInput({ ...input, item: "" }) }}
        > Cancel Edit</button>)}
      <div className="item_list_container">
        {data.map((elm, index) => {
          return (
            <div className="item_container" key={elm._id}>

              <p className="todo_item">{elm.item}</p>

              <i className="fas fa-edit" onClick={(e) => { setInput({ ...input, item: elm.item });
                  seteditParameter({ ...editParameter, flag: true, id: elm._id, }) }} ></i>

              <i className="fas fa-trash-alt" onClick={(e) => { Delete(elm._id) }} ></i>
            </div>
          );
        })}
      </div>
    </div>
  );
};