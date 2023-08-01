import Featured from "../../components/featured/Featured";
import IndividualGuideList from "../../components/individualGuideList/IndividualGuideList";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import ProvincialGuideList from "../../components/provincialGuideList/ProvincialGuideList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by province</h1>
        <ProvincialGuideList />
        <h1 className="homeTitle">Guides guests love</h1>
        <IndividualGuideList />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
