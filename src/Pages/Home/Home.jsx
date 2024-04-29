import Artist from "./Artist";
import ArtsAndCraftCategories from "./ArtsAndCraftCategories";
import Baneer from "./Baneer";
import CraftIteams from "./CraftIteams";
import Review from "./Review";

const Home = () => {
    return (
      <div>
        <Baneer />
        <CraftIteams />

        <div className="max-w-6xl mx-auto px-4">
          <ArtsAndCraftCategories />
          <Artist />
          <Review />
        </div>
      </div>
    );
};

export default Home;