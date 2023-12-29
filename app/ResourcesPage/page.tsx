import Link from "next/link";
import { client } from "../lib/sanity";
import { Post } from "../types";
import { urlFor } from "../lib/sanityImageUrl";
import Anchor from "../components/Anchor";

async function getData() {
  const query = "*[_type == 'post'] | order(_createdAt asc)";

  const data = client.fetch(query, { cache: "no-store" });
  return data;
}

const ResourcePage: React.FC = async () => {
  const data = (await getData()) as Post[];
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-sky-400 text-transparent bg-clip-text m-6">
        All Resources
      </h1>
      <div className="bg-slate-500 w-3/5 h-0.5 m-2 mb-12"></div>
      <div className="flex flex-wrap justify-center items-center">
        {data.map((post, index: number) => (
          <Link
            href={`/resource/${post.slug.current}`}
            key={`${post}_${index}`}
          >
            <div className="text-neutral-600 flex justify-center items-center shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] m-3 bg-white rounded-lg">
              <div className="px-4">
                <img
                  className="h-52 w-52"
                  src={urlFor(post.content[0].asset._ref).url()}
                  alt={post.title}
                />
              </div>
              <div className="border-l-2 border-slate-500 p-5 w-60">
                <h3 className="font-semibold">{post.title}</h3>
                <p className="mt-2 text-sm font-bold text-teal-600">
                  {post.date}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Anchor link={"http://localhost:3000"} text={"Go Back"} />
    </div>
  );
};

export default ResourcePage;
