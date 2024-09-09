import { Avatar, Box, Collapse, Divider,Drawer,Icon,List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import BookIcon from "@mui/icons-material/Book";
import ArticleIcon from "@mui/icons-material/Article";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { useDrawerContext } from "../../contexts";

interface ILayoutBasePaginaProps {
  children: React.ReactNode;
}

export const MenuLateral: React.FC<ILayoutBasePaginaProps> = ({ children }) => {
  const theme = useTheme();
  const smDonw = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, toggleDrawerOpen} = useDrawerContext();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDonw ? "temporary" : "permanent"} onClose={toggleDrawerOpen}>
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              alt="Logo"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
          </Box>
          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
              >
                <ListItemIcon>
                  <Icon color="secondary">home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página Inicial" />
              </ListItemButton>

              <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemIcon>
                  <PersonAddIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Add Leitor" />
              </ListItemButton>

              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <MenuBookIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Cadastro de Livro" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                  >
                    <ListItemIcon>
                      <BookIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Livros" />
                  </ListItemButton>

                  <ListItemButton
                    sx={{ pl: 4 }}
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                  >
                    <ListItemIcon>
                      <ArticleIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Periódicos" />
                  </ListItemButton>

                  <ListItemButton
                    sx={{ pl: 4 }}
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                  >
                    <ListItemIcon>
                      <InsertDriveFileIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Folhetos" />
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton
                selected={selectedIndex === 5}
                onClick={(event) => handleListItemClick(event, 5)}
              >
                <ListItemIcon>
                  <PendingActionsIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Empréstimos" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      ;
      <Box height="100vh" marginLeft={smDonw ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
