// @store
import { reduxStore } from '../store';

const getCore = () => {
  if (global.core) {
    return global.core;
  }

  const core = {
    reduxStore,
  };

  global.core = core;
  return core;
};

export const core = getCore();
