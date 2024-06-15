import icon1 from "../../Images/menu/Badge Discount.png";
import icon2 from "../../Images/menu/Burger.png";
import icon3 from "../../Images/menu/Cup 01.png";
import icon4 from "../../Images/menu/Ice Cream.png";
import icon5 from "../../Images/menu/Serving Plate.png";
import Food1 from "../../Images/Foods/Food 1.png";
import Food2 from "../../Images/Foods/Food 2.png";
import Food3 from "../../Images/Foods/Food 3.png";
import Food4 from "../../Images/Foods/Food 4.png";
import Food5 from "../../Images/Foods/Food 5.png";
import Food6 from "../../Images/Foods/Food 6.png";
function Menu() {
  return (
    <div className="menu">
      <div className="title">
        <p>MENU</p>
        <hr />
      </div>
      <div className="menu-titles">
        <ul>
          <li>
            <button style={{ backgroundColor: "#ffc300" }}>
              <img src={icon1} alt="" />
              Best Seller
            </button>
          </li>
          <li>
            <button>
              <img src={icon2} alt="" />
              Hamberger
            </button>
          </li>
          <li>
            <button>
              <img src={icon3} alt="" />
              Drink
            </button>
          </li>
          <li>
            <button>
              <img src={icon4} alt="" />
              Dessert
            </button>
          </li>
          <li>
            <button>
              <img src={icon5} alt="" />
              Fried Chicken
            </button>
          </li>
        </ul>
      </div>
      <div className="foods">
        <div className="food">
          <img src={Food1} alt="" />
          <h2>Cheese Beef Hamburger</h2>
          <p>fried chicken balls, french fries</p>
          <p>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>(5)</span>
          </p>
          <div>
            <span>5.39$</span>
            <i class="fa-solid fa-basket-shopping"></i>
          </div>
        </div>
        <div className="food">
          <img src={Food2} alt="" />
          <h2>Combo funny</h2>
          <p>fried chicken balls, french fries</p>
          <p>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>(5)</span>
          </p>
          <div>
            <span>10.3$</span>
            <i class="fa-solid fa-basket-shopping"></i>
          </div>
        </div>
        <div className="food">
          {" "}
          <img src={Food3} alt="" />
          <h2>‌Chicken with Spicy Sauce</h2>
          <p>chili garlic sauce, black pepper sauce</p>
          <p>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>(5)</span>
          </p>
          <div>
            <span>7.2$</span>
            <i class="fa-solid fa-basket-shopping"></i>
          </div>
        </div>
        <div className="food">
          {" "}
          <img src={Food4} alt="" />
          <h2>Salad mixed vinegar</h2>
          <p>Salad, vinegar, tomato</p>
          <p>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>(5)</span>
          </p>
          <div>
            <span>5.4$</span>
            <i class="fa-solid fa-basket-shopping"></i>
          </div>
        </div>
        <div className="food">
          {" "}
          <img src={Food5} alt="" />
          <h2>Chicken burger</h2>
          <p>fried chicken</p>
          <p>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>(5)</span>
          </p>
          <div>
            <span>5.39$</span>
            <i class="fa-solid fa-basket-shopping"></i>
          </div>
        </div>
        <div className="food">
          {" "}
          <img src={Food6} alt="" />
          <h2>Lipton</h2>
          <p>Best Cold Drink</p>
          <p>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>(5)</span>
          </p>
          <div>
            <span>1.39$</span>
            <i class="fa-solid fa-basket-shopping"></i>
          </div>
        </div>
      </div>
      <a href="">
        See all
      </a>
    </div>
  );
}

export default Menu;
