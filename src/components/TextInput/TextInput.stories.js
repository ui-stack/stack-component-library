import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
//import { withKnobs } from '@storybook/addon-knobs';
//import centered from '@storybook/addon-centered/react';

//import { storyOptions } from '../../../.storybook/options';

import readme from './README.md';

import {TextInput} from './TextInput';

const stories = storiesOf('Components|Forms/Text input', module);

const groupId = 'TEXTINPUT-ID1';

//stories.addParameters(storyOptions);
//stories.addDecorator(withKnobs);
//stories.addDecorator(centered);

stories.add(
  'Default',
  () => (
    <>
      <TextInput />

      <br />
      <TextInput isDisabled />

      <br />
      <TextInput isInvalid />
      <br />
      <TextInput leftIcon="£" />
    </>
  ),
  {
    notes: readme,
  },
);
