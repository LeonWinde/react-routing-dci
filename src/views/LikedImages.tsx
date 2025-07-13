import { AnimatePresence } from "motion/react";
import { useState } from "react";
import ImageCard from "../components/ImageCard";
import useLikedStore from "../lib/useLikedStore";

const LikedImages = () => {
  const [grid, setGrid] = useState(true);

  const liked = useLikedStore((state) => state.liked);
  return (
    <div
      className={`mx-auto max-w-6xl  gap-4 lg:gap-8 grid overflow-visible ${
        grid ? "md:grid-cols-2 lg:grid-cols-3" : " "
      }`}
    >
      <button
        className="absolute  bg-gray-50 rounded-full right-12 top-12 drop-shadow-lg text-gray-600 py-2 px-4 cursor-pointer"
        onClick={() => setGrid((prev) => !prev)}
      >
        {grid ? "grid" : "block"}
      </button>
      <AnimatePresence mode="sync">
        {liked.map((img) => (
          <ImageCard {...img} key={img.id} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default LikedImages;
