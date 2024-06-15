import salad from "../../Images/search/salad.png";
import burger from "../../Images/search/burger.png";

function Search() {
  return (
    <div className="search">
      <div className="searchitem">
        <img src={salad} alt=""  id="salad"/>
        <img src={burger} alt="" id="burger" />
        <p>FIND A FOODELI STORE NEAR YOU</p>
        <span>see the convenience store address with you most</span>
        <div>
          <input type="text" placeholder="Typing Location" />
          <button>see on map</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
