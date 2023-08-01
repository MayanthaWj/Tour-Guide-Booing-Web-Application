import "./featured.css";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const { data, loading } = useFetch(
    "/tourGuides/countByCity?cities=Galle Fort,Dabulla,Sigiriya"
  );
  //console.log(data);
  return (
    <div className="featured">
      {loading ? (
        "Loading Please Wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://i.natgeofe.com/n/0a6facf5-2d64-4603-8a8e-b2bd5fbba709/03-sigiriya-rock.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Sigiriya</h1>
              <h2>{data[0]} Guides</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://media.istockphoto.com/id/1293526265/photo/golden-buddha-statue-in-dambulla-temple-in-sri-lanka.jpg?s=612x612&w=0&k=20&c=h9qAcMpxKUk_sCBdn0VlXvADcKP3okSNACF2ICDlHDM="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Dambulla</h1>
              <h2>{data[1]} Guides</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://previews.123rf.com/images/kerenby/kerenby1904/kerenby190400220/125041667-lighthouse-in-galle-fort-historic-lighthouse-at-a-fort-with-simple-style-and-a-nearby-beach-popular.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Galle Fort</h1>
              <h2>{data[2]} Guides</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
