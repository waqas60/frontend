import { YouTubeEmbed } from "react-social-media-embed";
import TwitterEmbed from "../socialEmbeds/TwitterEmbed";

interface CardType {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

const Card = ({ type, title, link }: CardType) => {
  return (
    <div
      className={`max-w-sm bg-white rounded-2xl shadow-md p-4 flex flex-col gap-3 transition-transform duration-200 hover:scale-[1.02] ${
        type === "twitter" ? "max-h-[250px]" : "max-h-[230px]"
      }`}
    >
      <p className="text-base font-semibold text-gray-800">{title}</p>
      <div className="border-t border-gray-200" />
      <div className="overflow-hidden rounded-xl">
        {type === "twitter" ? (
          <TwitterEmbed link={link} />
        ) : (
          <YouTubeEmbed url={link} width="100%" height="100%" />
        )}
      </div>
    </div>
  );
};

export default Card;
