import {
    LuLayoutDashboard,
    LuHandCoins,
    LuWalletMinimal,
    LuLogOut
} from "react-icons/lu";

export const ROUTE_PATH = 
    {
        LOGOUT: "/logout",
        DASHBOARD: "/dashboard",
        INCOME: "/income",
        EXPENSE: "/expense",
        LOGIN: "/login",
        SIGNUP: "/signup",
        TERMSANDCONDITION: "/termsAndConditions"
    }


export const SIDE_MENU_DATA = [
{
    id: "01",
    label: "Dashboard",
    icon: LuLayoutDashboard,
    path: ROUTE_PATH.DASHBOARD
},
{
    id: "02",
    label: "Income",
    icon: LuWalletMinimal,
    path: ROUTE_PATH.INCOME
},
{
    id: "03",
    label: "Expense",
    icon: LuHandCoins,
    path: ROUTE_PATH.EXPENSE
},

];

export const LOGOUT_DATA = {
    id: "04",
    label: "LogOut",
    icon: LuLogOut,
    path: ROUTE_PATH.LOGIN
};
