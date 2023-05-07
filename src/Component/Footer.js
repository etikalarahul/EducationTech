import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Example Company</h4>
            <p>A leading provider of ReactJS solutions.</p>
          </div>
          <div className="col-md-4">
            <h4>Blog</h4>
            <ul className="list-unstyled">
              <li><a href="#">Latest articles</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Authors</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Courses</h4>
            <ul className="list-unstyled">
              <li><a href="#">ReactJS Fundamentals</a></li>
              <li><a href="#">Advanced ReactJS</a></li>
              <li><a href="#">React Native</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p>© 2023 Example Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;