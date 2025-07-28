import { motion } from "motion/react";

interface NavIconType {
  icon: React.ReactNode;
  title: string;
  isOpen: boolean;
}

const NavItem = ({ isOpen, icon, title }: NavIconType) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center "
    >
      <div className="hover:bg-[#e2e2e2] rounded-md flex w-full cursor-pointer py-1 items-center gap-2">
        <button className="rounded-md cursor-pointer m-auto">{icon}</button>
        {isOpen && <p className="font-md rounded-md w-full">{title}</p>}
      </div>
    </motion.div>
  );
};

export default NavItem;
