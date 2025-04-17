"use client";

import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun,
  User,
  Briefcase,
  Code,
  FileText,
  Mail,
  Home,
  CircleUserRound,
  LogOut,
} from "lucide-react";
import NavLink from "./NavLink";
import { useTheme } from "next-themes";
import { Button } from "../../../components/buttons/Button";
import classNames from "classnames";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const NavigationSidebar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-screen
      bg-white/90 dark:bg-black/90
      backdrop-blur-lg shadow-lg
      border-r border-gray-200/50 dark:border-white/10
      py-8 px-3 flex flex-col gap-6
      transition-all duration-200 ease-in-out
      ${isCollapsed ? "w-24" : "w-72"}
      relative z-50`}
    >
      <Button
        variant="sidebar"
        size="icon"
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-5 top-30 transform -translate-y-1/2
        transition-all rounded-full 
        bg-white/90 dark:bg-black/90 hover:cursor-pointer"
        aria-label="Toggle sidebar"
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4" />
        ) : (
          <ChevronLeft className="w-4 h-4" />
        )}
      </Button>

      <div className="flex flex-col items-center">
        <CircleUserRound
          className={classNames(
            "text-gray-800 dark:text-gray-200 transition-colors",
            isCollapsed ? "w-8 h-8" : "w-16 h-16"
          )}
        />
        {!isCollapsed && (
          <div className="text-center mt-4 animate-fadeIn">
            <h2 className="font-semibold text-gray-900 dark:text-white">
              Jonasi Deetens
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Full Stack Developer
            </p>
          </div>
        )}
      </div>

      <nav className="flex-1 flex flex-col gap-3">
        <p
          className={`font-medium text-gray-500 dark:text-gray-400 mb-2 ${isCollapsed ? "text-xs text-center" : "text-sm px-4"}`}
        >
          Menu
        </p>

        <NavLink href="/home">
          <div className="flex items-center gap-3 group">
            <Home
              className={`group-hover:scale-110 transition-transform w-5 h-5`}
            />
            <span
              className={`group-hover:translate-x-1 transition-transform ${isCollapsed ? "hidden" : "block"}`}
            >
              Profile
            </span>
          </div>
        </NavLink>

        <NavLink href="/profile">
          <div className="flex items-center gap-3 group">
            <User
              className={`group-hover:scale-110 transition-transform w-5 h-5`}
            />
            <span
              className={`group-hover:translate-x-1 transition-transform ${isCollapsed ? "hidden" : "block"}`}
            >
              Profile
            </span>
          </div>
        </NavLink>

        <NavLink href="/experience">
          <div className="flex items-center gap-3 group">
            <Briefcase
              className={`group-hover:scale-110 transition-transform w-5 h-5`}
            />
            <span
              className={`group-hover:translate-x-1 transition-transform ${isCollapsed ? "hidden" : "block"}`}
            >
              Experience
            </span>
          </div>
        </NavLink>

        <NavLink href="/projects">
          <div className="flex items-center gap-3 group">
            <Code
              className={`group-hover:scale-110 transition-transform w-5 h-5`}
            />
            <span
              className={`group-hover:translate-x-1 transition-transform ${isCollapsed ? "hidden" : "block"}`}
            >
              Projects
            </span>
          </div>
        </NavLink>

        <NavLink href="/resume">
          <div className="flex items-center gap-3 group">
            <FileText
              className={`group-hover:scale-110 transition-transform w-5 h-5`}
            />
            <span
              className={`group-hover:translate-x-1 transition-transform ${isCollapsed ? "hidden" : "block"}`}
            >
              Resume
            </span>
          </div>
        </NavLink>

        <NavLink href="/contact">
          <div className="flex items-center gap-3 group">
            <Mail
              className={`group-hover:scale-110 transition-transform w-5 h-5`}
            />
            <span
              className={`group-hover:translate-x-1 transition-transform ${isCollapsed ? "hidden" : "block"}`}
            >
              Contact
            </span>
          </div>
        </NavLink>

        {session?.user && (
          <Button
            variant="ghost"
            size="default"
            onClick={handleLogout}
            className="mt-auto text-left hover:bg-gray-100 dark:hover:bg-white/10 gap-3 !justify-start hover:cursor-pointer
            text-sm transition-all rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-white/20"
          >
            <div className="flex items-center gap-3 group">
              <LogOut
                className={`group-hover:scale-110 transition-transform w-5 h-5`}
              />
              <span
                className={`group-hover:translate-x-1 transition-transform ${isCollapsed ? "hidden" : "block"}`}
              >
                Sign Out
              </span>
            </div>
          </Button>
        )}
      </nav>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200/50 dark:border-white/10">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="hover:bg-gray-100 dark:hover:bg-white/10 
            transition-all rounded-xl hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-white/20"
          aria-label="Toggle theme"
        >
          {mounted && theme === "dark" ? (
            <Sun className="w-5 h-5 text-yellow-400 hover:text-yellow-500 transition-colors" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700 hover:text-gray-900 transition-colors" />
          )}
        </Button>
      </div>
    </aside>
  );
};

export default NavigationSidebar;
