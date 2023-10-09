import { useEffect } from "react";
import BannerPic from "../../assets/BannerPic.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Banner = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="bg-[#5137ac] pt-24">
      <div className="mx-5 lg:mx-20">
        <div className="  ">
          <div className="min-h-screen lg:gap-16 md:gap-10 gap-5 grid md:grid-cols-2 grid-cols-1 items-center justify-center">
            <div data-aos="fade-up" data-aos-duration="3000">
              <h1 className="text-5xl font-bold text-white">
                Health and wellness <br />
                refer to a state of overall well-being{" "}
              </h1>
              <p className="py-6 text-white">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
              <Link className="btn btn-primary bg-[#ff3c00]">
                Book Appointment
              </Link>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500">
              <img src={BannerPic} className="lg:max-w-sm w-full rounded-lg " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
