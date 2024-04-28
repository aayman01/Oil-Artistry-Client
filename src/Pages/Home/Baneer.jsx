import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import { Autoplay, Navigation } from "swiper/modules";

const Baneer = () => {
  return (
    <div className="mt-5 mb-8">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative overflow-hidden p-12 text-center h-[400px] bg-image1">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
              <div className="flex h-full items-center justify-center">
                <div className="text-white">
                  <h2 className="mb-4 text-4xl p-4 font-semibold">
                    Discover the beauty of art on our painting website! Explore
                    a diverse collection of original paintings in various styles
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative overflow-hidden p-12 text-center h-[400px] bg-image2">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
              <div className="flex h-full items-center justify-center">
                <div className="text-white">
                  <h2 className="mb-4 text-4xl px-5 font-semibold">
                    Discover Art You Love <br />
                    Browse Collection Updated Daily
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative overflow-hidden p-12 text-center h-[400px] bg-image3">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
              <div className="flex h-full items-center justify-center">
                <div className="text-white">
                  <h2 className="mb-4 text-4xl p-4 font-semibold">
                    Elevate your space with vibrant colors and captivating{" "}
                    <br />
                    designs. Start your artistic journey today!
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Baneer;
