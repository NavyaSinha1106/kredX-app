"use client";
import Link from "next/link";
import { urlFor } from "../lib/sanityImageUrl";
import { CarouselProps } from "../types";
import { useRef, useState } from "react";

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionIndex: number) => {
    if (carouselRef.current) {
      const sections =
        carouselRef.current.querySelectorAll<HTMLDivElement>(".section");
      const sectionWidth = sections[0]?.getBoundingClientRect().width || 0;

      if (
        sections.length > 0 &&
        sectionIndex >= 0 &&
        sectionIndex < sections.length
      ) {
        const targetDistance = sectionIndex * sectionWidth;

        carouselRef.current.scrollTo({
          left: targetDistance,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <div className="overflow-hidden" ref={carouselRef}>
        <div className="flex">
          {data.map((post, index) => (
            <Link
              key={`${post}_${index}`}
              href={`/resource/${post.slug.current}`}
              style={{ flex: "0 0 33.33%" }}
              className="section"
            >
              <div className="mx-2">
                <div className="bg-white text-neutral-600 mt-6 rounded-lg">
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
      </div>
      <div className="flex justify-center items-center mt-6">
        {data.map((_, index: number) => {
          if (!(index % 3)) {
            return (
              <button
                key={`button_${index}`}
                onClick={() => {
                  setCurrentIndex(index / 3);
                  scrollToSection(index);
                }}
                className={`${
                  currentIndex === index / 3 ? "bg-zinc-800" : "bg-zinc-300"
                } w-3 h-3 rounded-full m-2`}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default Carousel;
