
import Banner from "../../Banner/Banner";
import { useLoaderData, Link } from "react-router-dom";
import Team from "../Team/Team";

const Home = () => {
  const data = useLoaderData().slice(0, 6);
  
  return (
    <div>
      <Banner></Banner>
      <div className="mx-5">
        <h1 className="text-4xl font-bold text-center mt-10 my-5 text-[#6c63ff]">
          Event Services
        </h1>
        <p className=" text-[#6c63ff] text-center font-semibold mb-10">Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          {data.map((singleData) => (
            <div
              key={singleData.id}
              className="card rounded-lg  bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-60 w-full"
                  src={singleData.image}
                  alt="image"
                />
              </figure>
              <div className="px-5">
                <h2 className="font-bold text-2xl mt-2">{singleData.title}</h2>
                {singleData.description?.length > 100 ? (
                  <p className="text-justify">{singleData.description?.slice(0, 100)}</p>
                ) : (
                  <p className="text-justify">{singleData.description}</p>
                )
                } 
                <div className="flex justify-between mb-5 mt-3">
                <p className="font-semibold text-[#6c63ff]">Entry Fee: {singleData.entryFee}</p>
                <Link
                    singleData={singleData}
                    to={`/event/${singleData.id}`}
                    className="bg-[#ff3c00] text-white border-none btn btn-primary font-semibold">
                    read more...
                  </Link>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
      <div>
      <Link to='/events' className="text-xl btn text-center hover:bg-[#6c63ff] text-white bg-[#ff3c00] mb-10">See all events</Link>
      </div>
      </div>
      
      <div>
      <h1 className="text-4xl font-bold text-center mt-5 text-[#6c63ff]">
          Event Category
        </h1>
        <p className=" text-[#6c63ff] text-center mt-3 font-semibold mb-10">Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
      <div className="lg:my-10 my-5 lg:mx-20 md:mx-10 mx-5">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <div className="card bg-base-100 hover:bg-[#7459d6] shadow-2xl my-5">
              <figure className="px-10 pt-10">
                <img
                  src="https://static.live.templately.com/woocommerce/2022/01/balance-icon-01.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold text-[#6243d1]">Yoga</h2>
                <p>Yoga is a physical, mental, and spiritual practice that originated</p>
              </div>
            </div>
            <div className="card bg-base-100 hover:bg-[#7459d6] shadow-2xl my-5">
              <figure className="px-10 pt-10">
                <img
                  src="https://static.live.templately.com/woocommerce/2022/01/balance-icon-02.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold text-[#6243d1]">Fitness</h2>
                <p>Fitness refers to the overall state of health and well-being of an individual</p>
              </div>
            </div>
            <div className="card bg-base-100 hover:bg-[#7459d6] shadow-2xl my-5">
              <figure className="px-10 pt-10">
                <img
                  src="https://static.live.templately.com/woocommerce/2022/01/balance-icon-02.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold text-[#6243d1]">Health</h2>
                <p>The United Nations agency working to promote health, keep the world safe</p>
              </div>
            </div>
            <div className="card bg-base-100 hover:bg-[#7459d6] shadow-2xl my-5">
              <figure className="px-10 pt-10">
                <img
                  src="https://static.live.templately.com/woocommerce/2022/01/balance-icon-04.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold text-[#6243d1]">Meditation</h2>
                <p>We show you how to meditate properly, the benefits of regular meditation practice </p>
              </div>
            </div>
            <div className="card bg-base-100 hover:bg-[#7459d6] shadow-2xl my-5">
              <figure className="px-10 pt-10">
                <img
                  src="https://static.live.templately.com/woocommerce/2022/01/balance-icon-05.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold text-[#6243d1]">Spa</h2>
                <p>A spa is a location where mineral spring water is used to give medicinal baths</p>
              </div>
            </div>
            <div className="card bg-base-100 hover:bg-[#7459d6] shadow-2xl my-5">
              <figure className="px-10 pt-10">
                <img
                  src="https://static.live.templately.com/woocommerce/2022/01/balance-icon-06.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold text-[#6243d1]">Nutrition</h2>
                <p>nutrition is  a regular, balanced diet.nutrition helps fuel your body</p>
              </div>
            </div>
          </div>
          </div>

      </div>
      <Team></Team>
    </div>
  );
};

export default Home;
