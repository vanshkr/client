import { configureStore } from '@reduxjs/toolkit';
import { gogoAnimeApi } from './services/gogoAnimeApi';
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [gogoAnimeApi.reducerPath]:gogoAnimeApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(gogoAnimeApi.middleware),
});
