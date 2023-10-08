
import { useParams, useLoaderData } from "react-router-dom";

const Event = () => {
  const data = useLoaderData();

  const { id } = useParams();

  const event = data.find((event) => event.id === id);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div>
      <div className="card ">
        <figure>
          <img className=" max-h-screen w-full" src={event.image} alt="image" />
        </figure>
        <div className="px-10 mt-2">
          <div className="flex justify-between items-center">
            <div className="bg-green-400 pr-10 p-5">
            <p className="font-semibold text-[#6243d1]">Date: {event.date}</p>
            <p className="font-semibold text-[#6243d1]">Entry Fee: {event.entryFee}</p>
          <p className="font-semibold text-[#6243d1]" >Location: {event.location}</p>
            </div>
            <div>
               <button className="btn btn-primary">Join Now</button>
            </div>
          </div>
        </div>
        <div>
          <div className="card-body">
            <h2 className="card-title  text-2xl">{event.title}</h2>
            <p className="text-justify">{event.description}</p>
          </div>
          <div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
