import { ContentData } from "../types";

const Card: React.FC<ContentData> = ({ content }) => {
  return (
    <div className="w-1/4 p-7 flex flex-col justify-start item-center">
      <img className="w-14 m-auto h-14" src={content.icon} />
      <div className="min-h-16">
        <h5 className="font-bold text-sky-900 text-center m-2 text-lg font-600">
          {content.title}
        </h5>
      </div>
      <p className="text-center text-xs text-black font-400">
        {content.summary}
      </p>
    </div>
  );
};

export default Card;
