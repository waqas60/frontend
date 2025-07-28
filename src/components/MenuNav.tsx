import SecondBrain from "../icons/SecondBrain";
import Share from "../icons/Share";
import Button from "./Button";

const MenuNav = () => {
  return (
    <div className="flex justify-between py-4">
      <div className="flex items-center gap-3">
        <SecondBrain />
        <p className="text-2xl font-medium"> Second Brain</p>
      </div>
      <div className="flex gap-2 ">
        <Button variant="secondary" title="Share" icon={<Share />} />
        <Button variant="tertiary" title="Logout" />
      </div>
    </div>
  );
};

export default MenuNav;
