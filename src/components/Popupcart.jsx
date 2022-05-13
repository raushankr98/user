import React from "react";
import "./Usercart.css";

function PopupCart({
  hideRef,
  handlePopupHide,
  popupData: { large, first, last, phone, gender, email, city },
}) {
  return (
    <div ref={hideRef} id="popup_container">
      <div className="popup_container_inner">
        <button onClick={handlePopupHide} className="popup_crose">
          X
        </button>
        <img src={large} alt="" />
        <h3>{`${first} ${last}`}</h3>
        <h4>Gender : {gender}</h4>
        <h4>Contact : {phone}</h4>
        <h4>Email : {email}</h4>
        <h4>City : {city}</h4>
      </div>
    </div>
  );
}

export default PopupCart;
