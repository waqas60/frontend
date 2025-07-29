import { Toaster } from "sonner";
import AddNewButtonBox from "./AddNewButtonBox";
import MenuNav from "./MenuNav";
import useFetchContent from "../hooks/useFetchContent";
import Card from "./Card";

interface MainMenuType {
  fn: () => void;
}

const MainMenu = ({ fn }: MainMenuType) => {
  const { data } = useFetchContent();

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
        {data.map((item, index) => (
          <Card
            key={index}
            type={item.type === "twitter" ? "twitter" : "youtube"}
            link={item.link}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default MainMenu;
