import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./reserve.css";
import DatePicker from "react-datepicker";
import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import useFetch from "../../hooks/useFetch";
// import { useContext, useState } from "react";
// import { SearchContext } from "../../context/SearchContext";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, hotelId, setOpenok }) => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  console.log(user);

  // const [openok, setOpenok] = React.useState(false);

  // const handleClickToOpen = () => {
  //   setOpenok(true);
  // };

  // const handleToClose = () => {
  //   setOpen(false);
  // };
  // const [selectedRooms, setSelectedRooms] = useState([]);
  // const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  // const { dates } = useContext(SearchContext);

  // const getDatesInRange = (startDate, endDate) => {
  //   const start = new Date(startDate);
  //   const end = new Date(endDate);

  //   const date = new Date(start.getTime());

  //   const dates = [];

  //   while (date <= end) {
  //     dates.push(new Date(date).getTime());
  //     date.setDate(date.getDate() + 1);
  //   }

  //   return dates;
  // };

  // const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  // const isAvailable = (roomNumber) => {
  //   const isFound = roomNumber.unavailableDates.some((date) =>
  //     alldates.includes(new Date(date).getTime())
  //   );

  //   return !isFound;
  // };

  // const handleSelect = (e) => {
  //   const checked = e.target.checked;
  //   const value = e.target.value;
  //   setSelectedRooms(
  //     checked
  //       ? [...selectedRooms, value]
  //       : selectedRooms.filter((item) => item !== value)
  //   );
  // };

  // const navigate = useNavigate();

  const handleClick = async () => {

    setOpenok(true);
    setOpen(false);
    // try {
    //   await Promise.all(
    //     selectedRooms.map((roomId) => {
    //       const res = axios.put(`/rooms/availability/${roomId}`, {
    //         dates: alldates,
    //       });
    //       return res.data;
    //     })
    //   );
    //   setOpen(false);
    //   navigate("/");
    // } catch (err) {}
  };
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Hi {user.username}</span>
        {/* {data.map((item) => ( */}
        <div className="rItem">
          <div className="rItemInfo">
            <div className="rTitle"></div>
            <div className="rDesc">
              Pleace fill below details for complete your booking.
            </div>
            <br></br>
            {/* <div className="rMax">
              Email: <b>{user.email}</b>
            </div>
            <div className="rPrice">"item.price"</div> */}
            <form>
              <div className="rMax">
                Email:
                <input
                  disabled={true}
                  type="text"
                  value={user.email}
                  style={{ marginLeft: "35px" }}
                />
              </div>
              <div className="rMax" style={{ marginTop: "10px" }}>
                Phone:
                <input type="text" style={{ marginLeft: "30px" }} />
              </div>
              <div className="rMax" style={{ marginTop: "10px" }}>
                From Date:
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  style={{ marginLeft: "20px" }}
                />
              </div>
              <div className="rMax" style={{ marginTop: "10px" }}>
                To Date:
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  style={{ marginLeft: "25px" }}
                />
              </div>
            </form>
          </div>
          <div className="rSelectRooms"></div>
        </div>
        {/* ))} */}
        <button className="rButton" onClick={handleClick}>
          Reserve Now!
        </button>
        {/* {openok && (
        <dialog open style={{ alignSelf: "center" }}>
          sdfsd
        </dialog>
      )} */}
      </div>
    </div>
  );
};

export default Reserve;
