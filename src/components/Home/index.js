import Header from "../Header/index";
import NewThisWeek from "../NewThisWeek";
import Button from "../Buttons";
import MultipleItems from "../MultipleItems";

import "./index.css";
import Footer from "../Footer";

const Home = () => (
  <>
    <Header />
    <h1 className="home-heading">New this week</h1>
    <NewThisWeek />
    <Button />
    <h1 className="home-heading">
      Plan a trip with help from local Hosts around the world
    </h1>
    <MultipleItems />
    <Footer />
  </>
);

export default Home;
