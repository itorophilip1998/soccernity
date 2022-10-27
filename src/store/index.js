import { configureStore } from "@reduxjs/toolkit"; 
import livescores from "./LiveScores";
export const store = configureStore({
  reducer: {
    livescores

  }

});
