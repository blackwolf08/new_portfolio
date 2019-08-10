import React, { Fragment } from 'react';
import { Impress, Step } from 'react-impressjs';

import Slide1 from './home/Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
import Slide5 from './Slide5';
import Slide6 from './Slide6';
import Slide7 from './Slide7';
import Slide8 from './Slide8';

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
            z: -3000
          }}
          className='slide4'
        >
          <Slide4 />
        </Step>
        <Step
          data={{
            x: 6000,
            y: -100,
            scale: 1,
            z: -6000
          }}
          className='slide5'
        >
          <Slide5 />
        </Step>
        <Step
          data={{
            x: 6000,
            y: -100,
            scale: 1,
            z: -9000
          }}
          className='slide6'
        >
          <Slide6 />
        </Step>
        <Step
          data={{
            x: 6000,
            y: -100,
            scale: 1,
            z: -12000
          }}
          className='slide7'
        >
          <Slide7 />
        </Step>
        <Step
          data={{
            x: 3500,
            y: -100,
            scale: 1,
            z: -12000
          }}
          className='slide8'
        >
          <Slide8 />
        </Step>
      </Impress>
    </Fragment>
  );
};

export default ImpressCanvas;
