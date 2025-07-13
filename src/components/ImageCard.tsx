import { motion } from "motion/react";
import { HiHeart } from "react-icons/hi2";
import type { Photo } from "../lib/types";
import useLikedStore from "../lib/useLikedStore";

const ImageCard = ({ title, url, id, description }: Partial<Photo>) => {
  const { addLiked, liked, removeLiked } = useLikedStore((state) => state);
  const isLiked = liked.some((img) => img.id === id);

  const handleClick = () => {
    const image = { id, title, url, description };
    if (isLiked) {
      return removeLiked(image);
    }
    return addLiked(image);
  };
  return (
    <motion.div
      className=" bg-gray-600 rounded-2xl shadow-lg shadow-black hover:shadow-2xl hover:transition-shadow hover:duration-300 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: -500, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <img src={url} alt={description} className="rounded-t-2xl w-full" />
      <p className="text-gray-50 p-4 text-center text-balance grow">{title}</p>

      <button
        onClick={handleClick}
        className={`mx-auto block py-4  transition-colors duration-300 cursor-pointer bottom-0 ${
          isLiked
            ? "text-lime-500 hover:text-lime-800"
            : "text-gray-200 hover:text-lime-500"
        }`}
      >
        <HiHeart size={40} color="" />
      </button>
    </motion.div>
  );
};

export default ImageCard;
