import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children, title = 'Tracy (Khor You Qi) - Portfolio' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="AI & Machine Learning Enthusiast" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      <main>{children}</main>
    </>
  );
};

export default Layout;