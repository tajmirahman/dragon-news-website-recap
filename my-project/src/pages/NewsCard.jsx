import { FaStar, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ data: news }) => {
  // console.log(news);


  return (
    <div className="card bg-base-100 shadow-md rounded-2xl overflow-hidden md:w-11/12 mx-auto my-1">
      {/* Author Section */}
      <div className="flex items-center gap-4 p-4">
        <img
          src={news.author.img}
          alt="MarketScreener"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold">{news.author.name}</h2>
          <p className="text-sm text-gray-500">{news.author.published_date}</p>
        </div>
      </div>

      {/* Image */}
      <figure>
        <img
          src={news.image_url}
          alt="News"
          className="w-full h-64 object-cover"
        />
      </figure>

      {/* Body */}
      <div className="card-body px-6 pt-4 pb-2">
        <h2 className="card-title text-xl font-bold">
          {news.title}

        </h2>
        <p className="text-sm text-gray-600 mt-2">
          {news.details.slice(0, 200)} ...
        </p>
        <div className="mt-4 flex justify-between items-center">
          <Link to={`/details/${news._id}`}><button className="link link-primary text-sm font-medium">Read More...</button></Link>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <FaStar className="text-yellow-400" /> {news.rating.number}
            </span>
            <span className="flex items-center gap-1">
              <FaEye /> {news.total_view}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
