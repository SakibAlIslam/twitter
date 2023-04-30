import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import SIdebarLogo from "./SIdebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";

const items = [
  {
    label: "Home",
    href: "/",
    icon: BsHouseFill,
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: BsBellFill,
  },
  {
    label: "Profile",
    href: "/users/123",
    icon: FaUser,
  },
];

const Sidebar = () => {
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SIdebarLogo />
          {items?.map((item, index) => (
            <SidebarItem
              key={index}
              href={item?.href}
              label={item?.label}
              icon={item?.icon}
            />
          ))}
          <SidebarItem 
            onClick={() => {
                
            }} 
            icon={BiLogOut}
            label="Logout"
            href="/logout"
          />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
