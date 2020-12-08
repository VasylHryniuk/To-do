import React from "react";

const Header = ({ allPosts, importantPosts }) => {
  const todayData = new Date();

  return (
    <div className="todo-header">
      <div className="todo-header__left">
        <div className="todo-header__inner">
          <h1 className="todo-title">
            Your <br />
            Things
          </h1>
          <div className="todo-header__data">
            <span>Nov</span>
            <span>{todayData.getDate()}</span>
            <span>{todayData.getFullYear()}</span>
          </div>
        </div>
      </div>
      <div className="todo-header__right">
        <div className="todo-header__imp">
          <div className="todo-header__imp-num">{allPosts}</div>
          <div className="todo-header__imp-title">All posts</div>
        </div>
        <div className="todo-header__done">
          <div className="todo-header__imp-num">{importantPosts}</div>
          <div className="todo-header__imp-title">Important posts</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
