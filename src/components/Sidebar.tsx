import { useState } from "react";
import Hamburger from "../icons/Hamburger";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import NavItem from "./NavItem";
import { motion } from "motion/react";
import Close from "../icons/Close";

const icons = [
  { icon: <TwitterIcon />, title: "Twitter" },
  { icon: <YoutubeIcon />, title: "Youtube" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ width: 60 }}
      animate={{ width: isOpen ? 200 : 60 }}
      className="p-4"
    >
      <button className="cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? <Close /> : <Hamburger />}
      </button>

      <div className="flex mt-4 flex-col gap-5">
        {icons.map((item, index) => (
          <NavItem
            key={index}
            icon={item.icon}
            title={item.title}
            isOpen={isOpen}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;
