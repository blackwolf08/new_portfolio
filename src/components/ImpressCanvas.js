import React, { Fragment } from 'react';
import { Impress, Step } from 'react-impressjs';

import Slide1 from './home/Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';

const ImpressCanvas = props => {
  return (
    <Fragment>
      <Impress
        progress={false}
        hint={false}
        fallbackMessage={
          <p>
            Sorry, your <b>device or browser</b> couldn't support well.
          </p>
        }
      >
        <Step
          id={'Hello'}
          data={{
            x: -2000,
            y: -100,
            scale: 1
          }}
          className='slide1'
        >
          <Slide1 />
        </Step>
        <Step
          id={'work'}
          data={{
            x: 2000,
            y: -100,
            scale: 1
          }}
          className='slide2'
        >
          <Slide2 />
        </Step>
        <Step
          className='slide3'
          data={{
            x: 6000,
            y: -100,
            scale: 1
          }}
        >
          <Slide3 />
        </Step>
        <Step
          data={{
            x: 6000,
            y: -100,
            scale: 1,
            z: -80000
          }}
          className='slide4'
        >
          <Slide4 />
        </Step>
      </Impress>
    </Fragment>
  );
};

export default ImpressCanvas;
