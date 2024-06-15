import phone from "../../Images/Mobile App/Phone.png";

function MobileApp() {
  return (
    <div className="mobileapp">
      <div className="parent">
        <img src={phone} alt="" />
        <div className="info">
          <h5>Exclusive offers and more</h5>
          <h2>MCDONALD’S MOBILE APP</h2>
          <p>
            As a global No. 1 fast food brand, McDonald's wishes to bring
            customers not only delicious and hygienic food of international
            standards but also the best service experience.
          </p>
          <div className="links">
            <button><i class="fa-brands fa-apple"></i><span>Download On the</span><span>App Store</span></button>
            <button><i class="fa-brands fa-google-play"></i><span>Download On the</span><span>Google Play</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MobileApp;
