import React from 'react';
import Blog from './Blog';
import "./BlogPost.css"
import Navbar from './Navbar';

function BlogPage() {
  const blogPosts = [
    {
      id: 0,
      imageUrl: 'https://www.wemakescholars.com/uploads/blog/TopprofessionalITcoursetopursueincollege.jpg',
      date: 'May 1, 2023',
      time: '10:00 AM',
      title: 'First Blog Post',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod mi vel dolor vehicula vestibulum.',
      author: 'John Doe',
    },
    {
      id: 1,
      imageUrl: 'https://www.questpond.com/img/2.png',
      date: 'May 3, 2023',
      time: '2:00 PM',
      title: 'Second Blog Post',
      description: 'Nullam eu nunc in purus cursus consectetur. Aenean tincidunt mauris et sapien interdum, sed tincidunt nulla blandit.',
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