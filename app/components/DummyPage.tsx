import { DummyData } from "../types";
import Anchor from "./Anchor";

const DummyPage: React.FC<DummyData> = ({ title }) => {
  return (
    <>
      <div className="bg-slate-900 h-screen flex flex-col justify-center items-center">
        <h1 className="text-teal-500 font-bold text-4xl">{title}</h1>
        <Anchor link={"/"} text={"Go Back"} />
      </div>
    </>
  );
};

export default DummyPage;
