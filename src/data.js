import HomeIcon from "@mui/icons-material/Home";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import SavingsIcon from "@mui/icons-material/Savings";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";

export const navigationLinks = [
  { id: 1, title: "Home", icon: <HomeIcon /> },
  { id: 2, title: "Budget", icon: <AddBusinessIcon /> },
  { id: 3, title: "Transactions", icon: <AttachMoneyIcon /> },
  { id: 4, title: "Subscriptions", icon: <SubscriptionsIcon /> },
  { id: 5, title: "Loans", icon: <CreditScoreIcon /> },
  { id: 6, title: "Reports", icon: <FlagCircleIcon /> },
  { id: 7, title: "Savings", icon: <SavingsIcon /> },
  { id: 8, title: "Financial Advice", icon: <LocalAtmIcon /> },
  { id: 9, title: "Account", icon: <AccountCircleIcon /> },
  { id: 10, title: "Settings", icon: <SettingsIcon /> },
];

export const transactions = [
  {
    id: 11,
    name: "Sarah Baker",
    image: "",
    date: "23/12/07",
    amount: 12880,
  },
  {
    id: 12,
    name: "Jonathan Carter",
    image: "",
    date: "23/07/22",
    amount: 13555,
  },
  {
    id: 13,
    name: "John Doe",
    image: "",
    date: "23/08/21",
    amount: 30350,
  },
];

export const reportData = [
  {
    id: 14,
    month: "Jan",
    value1: 25,
    value2: null,
  },
  {
    id: 15,
    month: "Feb",
    value1: 35,
    value2: 60,
  },
  {
    id: 16,
    month: "Mar",
    value1: 45,
    value2: null,
  },
  {
    id: 17,
    month: "Apr",
    value1: 55,
    value2: null,
  },
  {
    id: 18,
    month: "May",
    value1: 23,
    value2: null,
  },
];

export const budget = [
  {
    id: 19,
    title: "Subscriptions",
    type: "Automated",
    amount: 200,
  },
  {
    id: 20,
    title: "Loan Payment",
    type: "Automated",
    amount: 1500,
  },
  {
    id: 21,
    title: "Foodstuff",
    type: "Automated",
    amount: 300,
  },
  {
    id: 22,
    title: "Subscriptions",
    type: null,
    amount: 20,
  },
  {
    id: 23,
    title: "Subscriptions",
    type: null,
    amount: 30,
  },
];

export const subscriptions = [
  {
    id: 24,
    title: "LinkedIn",
    due_date: "23/12/04",
    amount: 20,
  },
  {
    id: 25,
    title: "Netflix",
    due_date: "23/12/10",
    amount: 50,
  },
  {
    id: 26,
    title: "DSTV",
    due_date: "23/12/22",
    amount: 30,
  },
];

export const savings = [
  {
    id: 27,
    image: "",
    saving_amount: 2500,
    title: "Pay fees",
    date_taken: "23/12/23",
    amount_left: 400,
  },
];
