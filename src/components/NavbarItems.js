import TableViewIcon from '@mui/icons-material/TableView';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

const navbarItems = [
  {
    title: "Booker",
    icon: <EditCalendarIcon/>,
    link: "/Booker",
  },
  {
    title: "Roster",
    icon: <TableViewIcon/>,
    link: "/Roster",
  },
  {
    title: "Back Office",
    icon: <HomeWorkIcon/>,
    link: "/Backoffice",
  },
];

export default navbarItems;
