import Artist from "./Artist";
import Baneer from "./Baneer";

const Home = () => {
    return (
      <div>
        <Baneer />
        <div className="max-w-6xl mx-auto px-4">
            <Artist/>
        </div>
      </div>
    );
};

export default Home;