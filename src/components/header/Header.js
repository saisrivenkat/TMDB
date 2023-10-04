/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import "../../styles/pages/_header.scss";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Appcontext } from "../../App";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const store = useContext(Appcontext);
  const usenavigate = useNavigate();
  const uselocation = useLocation();

  console.log(uselocation);

  const logout = () => {
    localStorage.clear();
    store.setuser();
  };
  return (
    <div className="header">
      <div className="header__logo">Movie App</div>
     {uselocation.pathname !== ('/login' || '/register') &&
          <div className="sub_menu">
            <div className="liked_movies" onClick={()=>usenavigate('/liked')}>
              <FavoriteIcon /> <span>Favourites</span>
            </div>
           
            {store.user ? (
              <>
              {console.log("from navbar",store.user)}
              <div className="header_logout" onClick={logout}>
              <LogoutIcon />
              <span>Logout</span>
            </div>
            </>
              
            ) : (
              <>
              {console.log(store.user)}
              <div
                className="header_login"
                onClick={() => usenavigate("/login")}>
                <LoginIcon />
                <span>Login</span>
              </div>
              </>
            )}
          </div>
}
    </div>
  );
}
export default Header;
