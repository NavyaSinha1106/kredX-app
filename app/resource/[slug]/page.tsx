import Anchor from "@/app/components/Anchor";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { Post } from "@/app/types";

async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query, { cache: "no-store" });

  return data;
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Post;

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-sky-400 text-transparent bg-clip-text m-6 w-3/5">
        {data.title}
      </h1>
      <p className="text-lg text-slate-700 w-3/5 font-bold">{data.date}</p>
      <div className="bg-slate-600 w-3/5 h-0.5 m-2"></div>
      <img className="m-10" src={urlFor(data.content[0].asset._ref).url()} />
      <Anchor link={"http://localhost:3000"} text={"Go Back"} />
    </div>
  );
}
