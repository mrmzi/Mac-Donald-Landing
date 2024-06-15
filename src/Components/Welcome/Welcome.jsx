import { HiMinus, HiPlus } from "react-icons/hi";
import Alarmicon from "../../Images/Logo/Alarm (1).png";
import ShoppingBasket from "../../Images/Logo/Shopping Basket.png";
function Welcome() {
  return (
    <div className="welcome">
      <div className="order">
        <h1>Order your favourite food</h1>
        <p>Hamburger has many flavors, have you tried Cheese Beef Hamburger?</p>
            <p className="total">
              Total Order : <span>$5.39</span>
            </p>
        <div className="orderbutton">
          <div className="ordernumber">
            <button>
              <HiMinus className="icon" />
            </button>
            <span>3</span>
            <button>
              <HiPlus className="icon" />
            </button>
          </div>
          <a href="" className="link">
            <img src={ShoppingBasket} alt="" />
            <span>Order Now</span>
          </a>
        </div>
      </div>
      <div className="burgerphoto">
        <div className="deliverytime">
          <div>
            <img src={Alarmicon} alt="" />
            <span>Delivery</span>
          </div>
          <p>30 mins</p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
