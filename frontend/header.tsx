import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center fixed top-0">
      <div className="text-xl md:text-2xl font-extrabold">MHK</div>

      {/* Dark Mode Button */}
      {/* 
        <button
          className="btn-dark-mode theme-1 bg-dark dark:bg-light portrait:hidden"
          title="Dark Mode"
        >
          <div className="dark-mode-ball"></div>
        </button>
      */}

      {/* Menu Button */}
      {/* 
        <button className="landscape:hidden" id="btn-menu-p">
          <div className="h-7 md:h-8 aspect-square relative" id="icon-menu-open-p">
            <img className="icon-mode-dark" src="411474f5f58f97694d9f.png" alt="open menu icon" />
            <img className="icon-mode" src="5f0b7a27840f468f6fcd.png" alt="open menu icon" />
          </div>
          <div className="h-7 md:h-8 aspect-square relative hidden" id="icon-menu-close-p">
            <img className="icon-mode-dark" src="30385db2f1e6e679c9a3.png" alt="close menu icon" />
            <img className="icon-mode" src="374c99d734a5edb033d5.png" alt="close menu icon" />
          </div>
        </button>
      */}
    </header>
  );
};

export default Header;
