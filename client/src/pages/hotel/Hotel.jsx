import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState ,useEffect} from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hotel = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openok, setOpenok] = useState(false);

  //const [open, setOpen] = useState(false);

  const { data, loading } = useFetch(`/tourGuides/find/${id}`);
  //console.log("111111111111111", data);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    console.log(openok);
    if(openok){
      toast("Your booking is completed!");
      setOpenok(false);
    }
  });
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            {user ? (
              <button className="bookNow" onClick={handleClick}>
                Book Now
              </button>
            ) : (
              <Link
                to="/login"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <button className="bookNow">Book Now</button>
              </Link>
            )}

            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address} </span>
            </div>
            <span className="hotelDistance">{data.distance}</span>
            <span className="hotelPriceHighlight">
              Book over $250 here and get a free Trip to Habarana Park
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">Feel the Beauty of Sri lanka</h1>
                <p className="hotelDesc">
                  Assuming you would like an introduction for a tour guide
                  speech: Welcome! My name is {data.name} and I will be your
                  tour guide today. I would like to start by thanking you all
                  for choosing our tour. We are going to have a great time today
                  exploring {data.city}. Before we get started, I want to go
                  over a few ground rules. First and foremost, please stay with
                  the group and do not wander off. It is important that everyone
                  stays together for safety reasons. Secondly, please refrain
                  from talking to or touching the exhibits. Some of them are
                  very delicate and can easily be damaged. Lastly, please listen
                  to me and if you have any questions, feel free to ask at the
                  end of the tour. Now that we have gone over the ground rules,
                  let’s start the tour!
                </p>
              </div>
              {/* <div className="hotelDetailsPrice">  
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div> */}
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModal && (
        <Reserve setOpen={setOpenModal} hotelId={id} setOpenok={setOpenok} />
      )}
      
    </div>
  );
};

export default Hotel;
