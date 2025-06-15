"use client";

import { useEffect } from 'react';

const HomePageBodyManager = () => {
  useEffect(() => {
    document.body.classList.add('home-page-active');
    return () => {
      document.body.classList.remove('home-page-active');
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default HomePageBodyManager;