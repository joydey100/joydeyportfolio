import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ContactsIcon from "@mui/icons-material/Contacts";

const menu = [
  {
    id: 1,
    menuName: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    menuName: "About",
    path: "/about",
    icon: <InfoIcon />,
  },
  {
    id: 3,
    menuName: "Projects",
    path: "/projects",
    icon: <WorkIcon />,
  },
  {
    id: 4,
    menuName: "Blog",
    path: "/blog",
    icon: <RssFeedIcon />,
  },
  {
    id: 5,
    menuName: "Contact",
    path: "/contact",
    icon: <ContactsIcon />,
  },
];
export default menu;
