'use client'
import { AppThemeContext } from "@/context/AppThemeContext";
import Link from "next/link";
import { useContext } from "react";


export default function AppBar(){

    const themeContext = useContext(AppThemeContext);
    

    function changeTheme(){
        if(themeContext.changeMode){
            themeContext.changeMode(themeContext.mode === "dark" ? "light" : "dark");
        }
        
        console.log("Mode: ", themeContext.mode)
    }


    return(
        <nav className={`navbar navbar-${themeContext.mode} bg-${themeContext.mode}`}>
                <div className="container-fluid">
                  <Link className="navbar-brand" href="/">
                    Next.js
                  </Link>
                  <ul className="nav">
                    <li className="nav-item">
                      <Link className="nav-link" href="/">
                        Home
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" href="/about">
                        About
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" href="/products">
                        Products
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" href="/login">
                        Login
                      </Link>
                    </li>
                    <li>
                        <button className="btn btn-primary" onClick={changeTheme}>Switch Theme</button>
                    </li>
                  </ul>
                </div>
              </nav>
    );
}