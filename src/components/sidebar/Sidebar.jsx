import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import DiscountIcon from "@mui/icons-material/Discount";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CategoryIcon from "@mui/icons-material/Category";
import ReviewsIcon from "@mui/icons-material/Reviews";
import ClassIcon from "@mui/icons-material/Class";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Link } from "react-router-dom";
import LockResetIcon from "@mui/icons-material/LockReset";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  return (
    <div className="sidebar">
      {currentUser.role === "ROLE_ADMIN" ? (
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/" className="link">
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link to="/users" className="link">
                <li className="sidebarListItem">
                  <PermIdentity className="sidebarIcon" />
                  Users
                </li>
              </Link>
            

              <Link to="/products" className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Products
                </li>
              </Link>

              <Link to="/brands" className="link">
                <li className="sidebarListItem">
                  <ClassIcon className="sidebarIcon" />
                  Brands
                </li>
              </Link>
              <Link to="/coupons" className="link">
                <li className="sidebarListItem">
                  <DiscountIcon className="sidebarIcon" />
                  Coupon
                </li>
              </Link>

              <Link to="/deliveries" className="link">
                <li className="sidebarListItem">
                  <DeliveryDiningIcon className="sidebarIcon" />
                  Deliveries
                </li>
              </Link>

              <Link to="/reviews" className="link">
                <li className="sidebarListItem">
                  <ReviewsIcon className="sidebarIcon" />
                  Reviews
                </li>
              </Link>
              <Link to="/categories" className="link">
                <li className="sidebarListItem">
                  <AttachMoney className="sidebarIcon" />
                  Categories
                </li>
              </Link>
              <Link to="/orders" className="link">
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  Orders
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Manager account</h3>
            <ul className="sidebarList">
              <Link to="/profile" className="link">
                <li className="sidebarListItem">
                  <AccountBoxIcon className="sidebarIcon" />
                  Profile
                </li>
              </Link>
            </ul>
          </div>
          {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div> */}
        </div>
      ) : (
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/" className="link">
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link to="/ordersnoshipper" className="link">
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  Orders
                </li>
              </Link>
              <Link to="/myorders" className="link">
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  My Receive order
                </li>
              </Link>
              <Link to="/myorderscomplete" className="link">
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  My delivered order
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Manager account</h3>
            <ul className="sidebarList">
              <Link to="/profile" className="link">
                <li className="sidebarListItem">
                  <AccountBoxIcon className="sidebarIcon" />
                  Profile
                </li>
              </Link>
            </ul>
          </div>
          {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div> */}
        </div>
      )}
    </div>
  );
}
