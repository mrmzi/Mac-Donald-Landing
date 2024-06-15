import sale1 from "../../Images/Sale Off/1.png";
import sale2 from "../../Images/Sale Off/2.png";
import sale3 from "../../Images/Sale Off/3.png";

function Saleoff() {
  return (
    <>
      <div className="saleoff">
        <div className="title"><p>SALE OFF</p>
        <hr /></div>
        <div className="sales-packet">
          <div className="sale">
            <img src={sale1} alt="" />
            <div className="section1">
              <span>Fast food</span>
              <hr />
            </div>
            <h2>COMBO FUNNY</h2>
            <div className="section2">
              <span>buy 1 funny combo</span>
              <span>get 1 coca cola</span>
            </div>
            <div className="section3">
              <span>15.3$</span>
              <h2>10.3$</h2>
            </div>
            <button>
              <i class="fa-solid fa-basket-shopping"></i>
              Order now
            </button>
          </div>
          <div className="sale" id="bigsale">
            <img src={sale2} alt="" />
            <div className="section1">
              <span>Fast food</span>
              <hr />
            </div>
            <h2 className="salad">SALAD MIXED VINEGAR</h2>
            <div className="section2">
            </div>
            <div className="section3">
              <span>10.3$</span>
              <h2>3.3$</h2>
            </div>
            <button>
              <i class="fa-solid fa-basket-shopping"></i>
              Order now
            </button>
          </div>
          <div className="sale">
            <img src={sale3}  alt="" id="sale3" />
            <div className="section1">
              <span>House</span>
              <hr />
            </div>
            <h2>CHICKEN BURGER</h2>
            <div className="section2">
              <span>fried checken</span>
            </div>
            <div className="section3">
              <span>8.3$</span>
              <h2>6.3$</h2>
            </div>
            <button>
              <i class="fa-solid fa-basket-shopping"></i>
              Order now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Saleoff;
