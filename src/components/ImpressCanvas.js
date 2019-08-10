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
            x: 0,
            y: 0,
            scale: 1
          }}
          className='slide1'
        >
          <Slide1 />
        </Step>
        <Step
          id={'About'}
          data={{
            x: 1500,
            y: 1500,
            scale: 1
          }}
          className='slide2'
        >
          <Slide2 />
        </Step>
        <Step
          id={'Uniqgrid'}
          className='slide3'
          data={{
            x: 1500,
            y: -1500,
            scale: 1
          }}
        >
          <Slide3 />
        </Step>
        <Step
          id={'iSocial'}
          data={{
            x: -1500,
            y: 1500,
            scale: 1,
            rotateZ: 90
          }}
          className='slide4'
        >
          <Slide4 />
        </Step>
        <Step
          id={'Traveligo'}
          data={{
            x: -1500,
            y: -1500,
            scale: 1,
            rotateX: 180
          }}
          className='slide5'
        >
          <Slide5 />
        </Step>
        <Step
          id={'Futura'}
          data={{
            x: 3000,
            y: 0,
            scale: 1,
            rotateZ: 270
          }}
          className='slide6'
        >
          <Slide6 />
        </Step>
        <Step
          id={'Resume'}
          data={{
            x: 3000,
            y: 1500,
            scale: 1,
            z: -2000,
            rotateX: -90
          }}
          className='slide7'
        >
          <Slide7 />
        </Step>
        <Step
          id={'Skill'}
          data={{
            x: 3000,
            y: -1500,
            scale: 1,
            rotateX: 90
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
