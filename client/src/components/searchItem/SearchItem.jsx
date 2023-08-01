import "./searchItem.css";
import { Link } from "react-router-dom";

const SearchItem = (item) => {
  console.log(item.item.name);
  return (
    <div className="searchItem">
      <img src={item.item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.item.name}</h1>
        <span className="siSubtitle">{item.item.desc}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>{item.item.rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">${item.item.price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/tourGuides/${item.item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
