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
            x: -1000,
            y: -100,
            scale: 1,
            z: 1000
          }}
          className='slide1'
        >
          <Slide1 />
        </Step>
        <Step
          id={'work'}
          data={{
            x: 1000,
            y: -100,
            scale: 2
          }}
          className='slide2'
        >
          <Slide2 />
        </Step>
        <Step
          className='slide3'
          data={{
            x: 3000,
            y: -100,
            rotateZ: 270,
            scale: 4
          }}
        >
          <Slide3 />
        </Step>
        <Step
          data={{
            x: -1000,
            y: -100,
            scale: 1,
            z: 120000
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
