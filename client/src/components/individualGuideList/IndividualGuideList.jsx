import "./individualGuideList.css";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading } = useFetch("/tourGuides");
  console.log("FROM :", data);
  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.slice(0, 4).map((item) => (
            <div className="fpItem" key={item._id}>
              <img src={item.photos[0]} alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpPrice">Starting from ${item.price}</span>
              <span className="fpdesc">{item.desc}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
