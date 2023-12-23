import Button from "../components/Button";
import { DummyData } from "../types";

const DummyPage: React.FC<DummyData> = ({ title }) => {
  return (
    <>
      <div className="bg-slate-900 h-screen flex flex-col justify-center items-center">
        <h1 className="text-teal-500 font-bold text-4xl">{title}</h1>
        <Button link={"http://localhost:3000"} text={"Go Back"} />
      </div>
    </>
  );
};

export default DummyPage;
