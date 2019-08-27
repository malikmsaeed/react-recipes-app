import React from "react";

export default function Header({ children, title, styleClass }) {
  return (
    <header>
      <div className="container-fluid">
        <div class={`row align-items-center ${styleClass}`}>
          <div className="col text-center">
            <h1 className="text-light text-uppercase text-slanted letter-spacing display-3">
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: "Default Title",
  styleClass: "header-hero"
};
