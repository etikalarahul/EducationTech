import React from 'react';
import Blog from './Blog';
import "./BlogPost.css"
import Navbar from './Navbar';

function BlogPage() {
  const blogPosts = [
    {
      id: 0,
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/0*Bs43h1reQ0NZ2C91.png',
      date: 'May 1, 2023',
      time: '10:00 AM',
      title: 'Getting Started with ReactJS: A Beginners Guide',
      description: `This beginner's guide provides an introduction to ReactJS, a popular JavaScript library for building user interfaces. It covers the basics of ReactJS and provides steps to get started with creating a React app.`,
      author: 'John Doe',
    },
    {
      id: 1,
      imageUrl: 'https://www.pngkit.com/png/full/80-803539_javascript-black-and-white-logo.png',
      date: 'May 3, 2023',
      time: '2:00 PM',
      title: 'JavaScript: The Language That Powers the Web',
      description: `JavaScript is a high-level, interpreted programming language used to create interactive websites, web applications, and mobile apps. With over 25 years of evolution, it continues to be a versatile language that powers much of the modern web.`,
      author: 'Jane Smith',
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="blog-page">
      {blogPosts.map((post, index) => (
        <Blog key={index} {...post} />
      ))}
    </div>
    </>
  );
}

export default BlogPage;