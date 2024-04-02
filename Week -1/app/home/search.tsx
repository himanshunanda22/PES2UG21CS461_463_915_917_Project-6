"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
function getUser() {
  const storedUser = localStorage.getItem("user");
  const user = storedUser && JSON.parse(storedUser);
  const userName = user[0].name;
  const userId = user[0].id;
  return { userName, userId };
}
export default function Search({ isSearch }: any) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm.trim() !== "") {
      router.push(`/search/${searchTerm}`);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  const [user, setUser] = useState({
    name: "Username",
    id: 0,
  });
  useEffect(() => {
    const { userName, userId } = getUser();
    setUser({
      name: userName,
      id: userId,
    });
  }, []);
  return (
    <nav className="fixed top-0 z-10 w-full bg-white flex items-center justify-between px-6 py-4 border-b">
      <Link className="font-semibold text-lg" href="/home">
        Used Electronics
      </Link>
      {isSearch && (
        <div className="flex-1 ml-8">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <IconSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
              <Input
                className="pl-8 w-full bg-white"
                placeholder="Search products..."
                type="search"
                value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
          </form>
        </div>
      )}
      <div className="flex gap-3 ml-4 items-center">
        <Link className=" text-lg" href="/user">
          <img
            alt="User profile picture"
            className="rounded-full  shadow  hover:shadow-lg transition-shadow duration-200 ease-in-out"
            height="50"
            src="/placeholder.png"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
        </Link>

        <Link className=" text-lg" href="/user">
          {user.name}
        </Link>
        <Link href="/upload">
          <Button className="p-2">Upload</Button>
        </Link>

        <Button className="p-2" variant="destructive" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </nav>
  );
}
function IconSearch(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
