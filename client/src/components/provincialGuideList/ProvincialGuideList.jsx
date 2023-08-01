import "./provincialGuideList.css";
import useFetch from "../../hooks/useFetch";

const ProvincialGuideList = () => {
  const { data, loading } = useFetch(
    "/tourGuides/countByProvince?provinces=Southern Province, Western Province, Central Province, North Central Province, Eastern Province"
  );
  console.log(data);
  return (
    <div className="pList">
      {loading ? (
        "Loading Please Wait"
      ) : (
        <>
          <div className="pListItem">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGuFeXWYf9ZaCUBrpW87xUC2WUERe1Jbd6g&usqp=CAU"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>Southern Province</h1>
              <h2>{data[0]} Guides</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/61000/61973-Colombo.jpg"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>Western Province</h1>
              <h2>{data[1]} Guides</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://cdn.shopify.com/s/files/1/1762/3971/files/LK94009632-11-E.jpg?v=1660066805&width=3840"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>Central Province</h1>
              <h2>{data[2]} Guides</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://www.srilankadreamtours.com/wp-content/uploads/2019/04/North-Central-Province-Sri-Lanka.jpg"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>North Central Province</h1>
              <h2>{data[3]} Guides</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://cdn.shopify.com/s/files/1/1762/3971/files/LK94009626-11-E.jpg?v=1660800963&width=3840"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>Eastern Province</h1>
              <h2>{data[4]} Guides</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProvincialGuideList;
