import artist1 from "../../assets/artist1.jpg"
import artist2 from "../../assets/artist2.jpg"
import artist3 from "../../assets/artist3.jpg"
const Artist = () => {
    return (
      <div>
        <h2 className="text-center font-semibold text-4xl mb-8">Our Artists</h2>
        <div className="flex -col md:flex gap-2 justify-evenly">
          <div className="">
            <img className="w-[200px] h-[300px]" src={artist1} alt="" />
            <p className="text-2xl text-center font-medium mt-3">Jeni Alice</p>
            <p className="text-base text-center">Natural Artist</p>
          </div>
          <div className="">
            <img className="w-[200px] h-[300px]" src={artist2} alt="" />
            <p className="text-2xl text-center font-medium mt-3">
              Sisliya Park
            </p>
            <p className="text-base text-center">Natural Artist</p>
          </div>
          <div className="">
            <img className="w-[200px] h-[300px]" src={artist3} alt="" />
            <p className="text-2xl text-center font-medium mt-3">
              Nikola Hellen
            </p>
            <p className="text-base text-center">Natural Artist</p>
          </div>
        </div>
      </div>
    );
};

export default Artist;