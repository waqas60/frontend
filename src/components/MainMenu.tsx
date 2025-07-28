import { Toaster } from "sonner";
import AddNewButtonBox from "./AddNewButtonBox";
import Card from "./Card";
import MenuNav from "./MenuNav";

interface MainMenuType {
  fn: () => void;
}

const MainMenu = ({ fn }: MainMenuType) => {
  return (
    <div className="pl-4">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#10b981",
            color: "white",
            borderRadius: "10px",
            padding: "10px 20px",
            fontSize: "12px",
          },
          className: "shadow-md",
          duration: 3000,
        }}
      />
      <MenuNav />
      <div className="flex gap-4 flex-wrap">
        <AddNewButtonBox fn={fn} />
        <Card
          type="twitter"
          title="Node Js Tutorial"
          link="https://x.com/yasirafzalpak/status/1948119268186537998"
        />
        <Card
          type="twitter"
          title="Node Js Tutorial"
          link="https://x.com/yasirafzalpak/status/1948119268186537998"
        />
        <Card
          type="twitter"
          title="Node Js Tutorial"
          link="https://x.com/yasirafzalpak/status/1948119268186537998"
        />
        <Card
          type="twitter"
          title="Node Js Tutorial"
          link="https://x.com/yasirafzalpak/status/1948119268186537998"
        />
      </div>
    </div>
  );
};

export default MainMenu;
