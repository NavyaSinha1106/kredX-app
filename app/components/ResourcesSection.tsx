import { client } from "../lib/sanity";
import { Post } from "../types";
import ResourcesArrow from "../assets/ResourcesArrow.svg";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Carousel from "./Carousel";

async function getData() {
  const query = "*[_type == 'post'] | order(_createdAt asc)";

  const data = client.fetch(query, { cache: "no-store" });

  return data;
}

const ResourcesSection: React.FC = async () => {
  const data = (await getData()) as Post[];
  const ResourceArrowUrl: string = (ResourcesArrow as StaticImageData).src;
  return (
    <div className="flex flex-col justify-center items-center mx-32 mt-24">
      <div>
        <p className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-sky-400 text-transparent bg-clip-text">
          Resources
        </p>
      </div>
      <div className="self-end mt-4">
        <Link href="/ResourcesPage">
          <div className="flex mt-6">
            <p className="font-semibold text-lg p-2">See All Resources</p>
            <img src={ResourceArrowUrl} />
          </div>
        </Link>
      </div>
      <Carousel data={data} />
    </div>
  );
};

export default ResourcesSection;
