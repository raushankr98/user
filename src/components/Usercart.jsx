import React, { useEffect, useState, useRef } from "react";
import "./Usercart.css";
import axios from "axios";
import PopupCart from "./Popupcart";

function Usercart() {
  const [showData, setShowData] = useState();
  const [popupData, setPopupData] = useState({
    large: "",
    first: "",
    last: "",
    phone: "",
    gender: "",
    email: "",
    city: "",
  });
  const hideRef = useRef();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios.get("https://randomuser.me/api/?results=60");
      setShowData(data.results);
      localStorage.setItem("userData", JSON.stringify(data.results));
    } catch (error) {
      console.log(error);
    }
  };

  const findUser = (e) => {
    setShowData(
      JSON.parse(localStorage.getItem("userData")).filter(
        (el) =>
          el.name.first.toLowerCase().includes(e.toLowerCase()) ||
          el.name.last.toLowerCase().includes(e.toLowerCase())
      )
    );
  };

  const handlePopupShow = (data) => {
    setPopupData(data);
    hideRef.current.style.display = "block";
  };
  const handlePopupHide = () => {
    hideRef.current.style.display = "none";
  };

  return (
    <div className="constaner_data">
      {popupData ? (
        <PopupCart
          hideRef={hideRef}
          handlePopupHide={handlePopupHide}
          popupData={popupData}
        />
      ) : null}
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => findUser(e.target.value)}
      />
      {showData ? (
        <table border="1">
          <thead>
            <tr className="tr_table">
              <th>Profile Pic</th>
              <th>Name</th>
              <th className="phone">Phone</th>
              <th className="gender">Gender</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {showData.map(
              ({
                picture: { large, medium },
                name: { first, last },
                phone,
                gender,
                email,
                login: { uuid },
                location: { city },
              }) => {
                return (
                  <tr key={uuid}>
                    <td>
                      <img className="img" src={medium} alt="" />
                    </td>
                    <td
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        handlePopupShow({
                          large,
                          first,
                          last,
                          phone,
                          gender,
                          email,
                          city,
                        })
                      }
                    >{`${first} ${last}`}</td>
                    <td className="phone">{phone}</td>
                    <td className="gender">{gender}</td>
                    <td>{email}</td>
                    <td>{city}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Usercart;
