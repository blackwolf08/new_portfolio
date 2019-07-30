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
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/blackwolf08'
          className='nav_item'
        >
          GITHUB
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://linkedin.com/in/sunnydhama'
          className='nav_item'
        >
          LINKEDIN
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://facebook.com/beingsunnydhama'
          className='nav_item'
        >
          FACEBOOK
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='mailto: dhamasunny98@gmail.com'
          className='nav_item'
        >
          MAIL
        </a>
      </div>
      <div className='loop loop_one' />
      <div className='loop loop_two' />
      <div className='loop loop_three' />
      <div className='loop loop_four' />
    </div>
  );
};

export default Slide1;
