import { useEffect, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { NavLink } from "react-router";
import routes from "../lib/routes";
import type { User } from "../lib/types";

const Users = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("Error fetching users");
        }
        const data = await res.json();
        setUsers(data);
      } catch (e) {
        console.error(e);

        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="spin">
        <BiLoaderCircle color="white" className="animate-spin" size={40} />
      </div>
    );
  }
  if (error) {
    return <div className="text-red-500 text-2xl">{error}</div>;
  }
  return (
    <div className="w-full max-w-4xl bg-white/30 p-4 mx-auto">
      <ul>
        {users.map((user) => (
          <li>
            <NavLink
              to={`${user.id}`}
              className="text-sky-700 text-shadow-xs hover:underline hover:text-sky-500 cursor-pointer"
            >
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
