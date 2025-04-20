import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface MenuOptionProps {
  label: string;
  onClick: () => void;
}

interface AppMenuProps {
  viewItem: React.ReactNode;
  options: MenuOptionProps[];
}

const AppMenu: React.FC<AppMenuProps> = ({ options, viewItem }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {viewItem}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {options.map((item, index) => (
          <MenuItem onClick={item.onClick} key={index}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default AppMenu;
