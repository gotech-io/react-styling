import React from 'react';
import CssButton from './CssButton';
import CssModuleButton from './CssModuleButton';
import InlineStyleButton from './InlineStyleButton';
import StyledComponentButton from './StyledComponentButton';
import EmotionCssButton from './EmotionCssButton';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <CssButton text="I'm a CssButton" />
      <CssModuleButton text="I'm a CssModuleButton" />
      <InlineStyleButton text="I'm an InlineStyleButton" />
      <EmotionCssButton text="I'm an EmotionCssButton" />
      <StyledComponentButton text="I'm a StyledComponentButton" />
    </div>
  );
};

export default App;
