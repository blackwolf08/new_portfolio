import React from 'react';

const Slide1 = () => {
  return (
    <div className='slide1_root'>
      <div className='slide1_logo' />
      <div className='slide1_content'>
        <h1 className='slide1_content_head'>
          Hello<span className='content_head_dot'>.</span>
        </h1>
        <h1 className='slide1_content_head'>I am</h1>
        <h1 className='slide1_content_head'>Sunny</h1>
      </div>
      <div className='slide1_description'>
        <p className='slide1_description_para'>Full-Stack Developer</p>
        <p className='slide1_description_para'>and Web Designer</p>
        <p className='slide1_description_para'>based in India</p>
      </div>
      <div className='nav'>
        <button className='nav_item'>GITHUB</button>
        <button className='nav_item'>LINKEDIN</button>
        <button className='nav_item'>TWITTER</button>
        <button className='nav_item'>FACEBOOK</button>
        <button className='nav_item'>MAIL</button>
      </div>
      <div className='loop loop_one' />
      <div className='loop loop_two' />
      <div className='loop loop_three' />
      <div className='loop loop_four' />
    </div>
  );
};

export default Slide1;
