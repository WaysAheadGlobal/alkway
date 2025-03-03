import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";

export default function NavbarDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="flex flex-col applyClassicaProFont my-4 gap-3 mx-4">
        <img className="h-[80px]" src="logo.svg" />
        <Link>Buy</Link>
        <Link>Rent</Link>
        <Link>Off Plans</Link>
        <Link>Commercial </Link>
        <Link>Luxury</Link>
        <Link>Contact us</Link>
        <button className="bg-[#F7F6F7] text-[#1A1A1A]  rounded-full px-5 py-1 flex  gap-2  font-semibold items-center">
          <img
            className="h-[20px] w-[20px] 2xl:h-[29px] 2xl:w-[29px]"
            src="whatsappIcon.png"
            alt="whatsappicon"
          ></img>
          <p className="pt-1 text-[14px] 2xl:text-[18px] applyArethusaPro leading-[30.4px]">
            WhatsApp
          </p>
        </button>
      </div>
    </Box>
  );

  return (
    <div>
      <button
        onClick={toggleDrawer(true)}
        className="h-[50px] w-[50px] md:hidden bg-black rounded-full"
      ></button>
      {/* <Button
        className="h-[50px] w-[50px] md:hidden bg-black rounded-full"
        onClick={toggleDrawer(true)}
      ></Button> */}

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
