import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const { logout, user } = useAuth();
  const handleLogout = () => {
    return logout();
  };
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex text-black flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li onClick={() => setOpenNav(false)}>
        <NavLink
          to={"/"}
          onClick={() => setOpen(false)}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " border-b-[3px]  border-b-[#1c4456] font-semibold "
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li onClick={() => setOpenNav(false)}>
        <NavLink
          to={"/about"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " border-b-[3px]  border-b-[#1c4456] font-semibold "
              : ""
          }
        >
          About
        </NavLink>
      </li>
      <li onClick={() => setOpenNav(false)}>
        <NavLink
          to={"/contact"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " border-b-[3px]  border-b-[#1c4456] font-semibold "
              : ""
          }
        >
          Contact
        </NavLink>
      </li>
      <li onClick={() => setOpenNav(false)}>
        <NavLink
          to={"/dashboard"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " border-b-[3px]  border-b-[#1c4456] font-semibold "
              : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
    </ul>
  );

  return (
    <Navbar className=" mx-auto max-w-[1270px] rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          TManage
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="hidden lg:flex items-center gap-x-1">
            <Link to={"/login"}>
              <button className="bg-gray-800 text-white px-3 py-1 rounded-md">
                Log In
              </button>
            </Link>{" "}
            <button
              onClick={handleLogout}
              className="bg-gray-800 text-white px-3 py-1 rounded-md"
            >
              Log out
            </button>
          </div>

          {user?.email && (
            <div className="w-10 rounded-full">
              <img
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : "https://www.svgrepo.com/show/525577/user-circle.svg"
                }
                alt={user?.displayName}
              />
            </div>
          )}

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          <Button
            onClick={() => setOpenNav(false)}
            fullWidth
            variant="gradient"
            size="sm"
            className=""
          >
            <Link to={"/login"}>Log in</Link>
          </Button>
          <Button
            onClick={() => setOpenNav(false)}
            fullWidth
            variant="gradient"
            size="sm"
            className=""
          >
            Log Out
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}
