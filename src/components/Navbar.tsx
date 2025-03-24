import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { AppBar, AppBarSection } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { Drawer, DrawerContent } from "@progress/kendo-react-layout";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const appBarClasses = isScrolled
    ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg"
    : "bg-transparent";

  return (
    <AppBar
      className={`fixed w-full z-50 transition-all duration-300 ${appBarClasses}`}
      style={{ position: "fixed", top: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 w-full">
          <AppBarSection>
            <a
              href="#"
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              Portfolio
            </a>
          </AppBarSection>

          {/* Desktop Navigation */}
          <AppBarSection className="hidden md:flex">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onClick={() => (window.location.href = item.href)}
                >
                  {item.name}
                </Button>
              ))}
              <Button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>
          </AppBarSection>

          {/* Mobile Toggle */}
          <AppBarSection className="md:hidden flex items-center">
            <Button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 mr-2"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300"
            >
              {isOpen ? "✕" : "☰"}
            </Button>
          </AppBarSection>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <Drawer
        expanded={isOpen}
        position="start"
        mode="overlay"
        onOverlayClick={() => setIsOpen(false)}
        className="md:hidden"
      >
        <DrawerContent>
          <div
            className={`md:hidden px-4 py-3 bg-white dark:bg-gray-900 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {navItems.map((item) => (
              <Button
                key={item.name}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = item.href;
                }}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
