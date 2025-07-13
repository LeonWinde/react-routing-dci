import { HiHeart } from "react-icons/hi2";
import { NavLink, Outlet } from "react-router";
import routes from "../lib/routes";
import useLikedStore from "../lib/useLikedStore";

const Navbar = () => {
  const amountLiked = useLikedStore((state) => state.liked.length);
  return (
    <>
      <header
        className="flex items-center justify-center shadow-2xl
       shadow-black bg-gray-900 "
      >
        <nav className="flex justify-between items-center max-w-5xl w-full p-4  text-white">
          <div className="logo size-10 flex items-center justify-center font-serif font-bold text-5xl">
            <NavLink to={routes.home}>LW</NavLink>
          </div>
          <ul className="flex justify-center items-center gap-4">
            <li>
              <NavLink to={routes.home}>Home</NavLink>
            </li>
            <li>
              <NavLink to={routes.users}>Users</NavLink>
            </li>
          </ul>
          <div className="flex items-center justify-center relative">
            <NavLink to={routes.liked}>
              <HiHeart size={40} />
              <div className="rounded-full bg-red-500 size-5 text-xs flex items-center justify-center absolute bottom-0 left-0 text-white">
                {amountLiked < 10 ? amountLiked : "9+"}
              </div>
            </NavLink>
          </div>
        </nav>
      </header>
      <main className=" min-h-[90vh] py-10 relative ">
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
