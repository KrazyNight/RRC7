function Popup ({ title, closePopup }) {
  return (

    <>
      <div className="popup">
        <span>{ title }</span>
        <div className="popup__btns">
          <button className="popup__btn"
          onClick={() => console.log('Confirm Btn') }
          >Confirm</button>
          <button className="popup__btn popup__btn--cancel"
          onClick={() => closePopup() }
          >Cancel</button>
        </div>
      </div>
      <div className="backdrop"
      onClick={() => closePopup()}
      
      ></div>
    </>
  )
};

export default Popup;
