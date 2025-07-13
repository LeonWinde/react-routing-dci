import { useEffect, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { useParams } from "react-router";
import ImageCard from "../components/ImageCard";
import type { Photo, User } from "../lib/types";

const UserDetails = () => {
  const [user, setUser] = useState<null | User>();
  const [images, setImages] = useState<Array<Photo>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!res.ok) {
          throw new Error("Error fetching users");
        }
        const data = await res.json();
        setUser(data);
      } catch (e) {
        console.error(e);

        setError(true);
      } finally {
        setLoading(false);
      }
    };
    const fetchImages = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(
          `https://api.slingacademy.com/v1/sample-data/photos?offset=${
            Number(id) * 8
          }&limit=8`
        );
        if (!res.ok) {
          throw new Error("Error fetching images");
        }
        const data = await res.json();
        setImages(data.photos);
      } catch (e) {
        console.error(e);

        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
    fetchUsers();
  }, [id]);

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
    <div className="max-w-5xl mx-auto text-center px-4">
      <h2 className="text-3xl font-bold">{user?.name}</h2>
      <p className="text-gray-600 text-sm">{user?.address.city} </p>
      <p className="text-gray-600 text-sm">
        {user?.address.street} {user?.address.suite}{" "}
      </p>
      <div className="imagecontainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {!images ? (
          <div>Loading</div>
        ) : (
          images.map((image) => <ImageCard {...image} key={image.id} />)
        )}
      </div>
    </div>
  );
};

export default UserDetails;
