import { XEmbed } from "react-social-media-embed";

export interface SocialEmbedType {
  link: string;
}

const TwitterEmbed = ({ link }: SocialEmbedType) => (
  <div>
    <XEmbed url={link} />
  </div>
);
export default TwitterEmbed;
