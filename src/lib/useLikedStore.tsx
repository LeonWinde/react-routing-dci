import { create } from "zustand";
import type { Photo } from "./types";
interface LikedState {
  liked: Array<Partial<Photo>>;
  addLiked: (image: Partial<Photo>) => void;
  removeLiked: (image: Partial<Photo>) => void;
}

const useLikedStore = create<LikedState>((set) => ({
  liked: [],
  addLiked: (image) => set((prev) => ({ liked: [...prev.liked, image] })),
  removeLiked: (image) =>
    set((prev) => ({ liked: prev.liked.filter((el) => el.id !== image.id) })),
}));

export default useLikedStore;
