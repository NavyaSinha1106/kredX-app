"use client";
import Link from "next/link";
import { urlFor } from "../lib/sanityImageUrl";
import { CarouselProps } from "../types";
import { useEffect, useState } from "react";

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  let width: number;
  if (typeof window !== "undefined") {
    width = window.screen.availWidth;
  }

  useEffect(() => {
    setCurrentPosition(-currentIndex * (width - 240));
  }, [currentIndex]);

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex w-full"
        style={{
          transform: `translateX(${currentPosition}px)`,
          transition: "0.5s ease-in",
        }}
      >
        {data.map((post, index) => (
          <Link key={index} href={`/resource/${post.slug.current}`}>
            <div
              className="flex-none pr-4"
              style={{ width: `${(width - 240) / 3}px` }}
            >
              <div className="bg-white text-neutral-600 mt-6 rounded-lg w-full">
                <img
                  className="w-full"
                  src={urlFor(post.content[0].asset._ref).url()}
                  alt={post.title}
                />
                <div className="py-4 w-full">
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-400">{post.date}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        {data.map((data, index) => {
          if (!(index % 3)) {
            return (
              <button
                onClick={() => {
                  console.log(index);
                  setCurrentIndex(index / 3);
                }}
                className={`${
                  currentIndex === index / 3 ? "bg-zinc-800" : "bg-zinc-300"
                } w-3 h-3 rounded-full m-2`}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Carousel;
