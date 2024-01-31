const Popup = ({ onClose }) => {
    return (
      <div className="popup">
        <div className="popup-content">
          <p style={{color: "black"}}>This is a demo site. You can try navigating to the reservations page.</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };

  export default Popup;