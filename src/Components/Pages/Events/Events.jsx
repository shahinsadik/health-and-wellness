
import {useLoaderData, Link} from 'react-router-dom'

const Events = () => {
    const data = useLoaderData();
    return (
        <div>
             <div className="mx-5 pt-24 mb-10">
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
              <div className="card-body">
                <h2 className="font-bold text-2xl">{singleData.title}</h2>
                {singleData.description?.length > 100 ? (
                  <p className="text-justify">{singleData.description?.slice(0, 100)}</p>
                ) : (
                  <p className="text-justify">{singleData.description}</p>
                )} <Link
                    singleData={singleData}
                    to={`/event/${singleData.id}`}
                    className="text-[#ff3c00] hover:text-[#6c63ff] border-none text-end font-semibold">
                    read more...
                  </Link>
                
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
    );
};

export default Events;