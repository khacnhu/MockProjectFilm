import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../src/redux/Hook";
import { increment } from "./redux/Reducer/rdcCount";
import { AddUser } from "./redux/Reducer/rdcUser";

function App() {
  const dispatch = useAppDispatch();

  // const [renderUser, setRenderUser] = useState(null);

  //TRANKHACNHU
  const count = useAppSelector((state) => state.counter.value);
  // console.log(count)
  const user = useAppSelector((state) => state.user);
  // console.log(user.lsUsers[0].map(ele =));
  const Increase = () => {
    dispatch({ type: increment, payload: 1 });
  };

  const ADD = () => {
    fetch("https://teachingserver.onrender.com/User")
    .then(res => res.json() )
    .then(data => 
      dispatch({type:  AddUser, payload: data})
      )

  };

  return (
    <div className="App">
      {
        user && user?.lsUsers.map((ele: any) => {
          return( 
            <div> {ele.first_name} </div>
          )
        })
      }
      <div>{JSON.stringify(user.lsUsers[0])}</div>
      <button onClick={ADD}>AddUser</button>

      <div>{count}</div>
      <div>
        <button onClick={Increase}>Increase</button>
      </div>
    </div>
  );
}

export default App;
