import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import stageReducer from './stageSlice';
import filterSlice from './filterSlice';
import routesSlice from './routesSlice';

export default configureStore({
   reducer: {
      search: searchReducer,
      stage: stageReducer,
      filter: filterSlice,
      routes: routesSlice,
   },
});
