import { configureStore } from "@reduxjs/toolkit"; 
import livescores from "./LiveScores";
import general from "./General";
export const store = configureStore({
  reducer: {
    livescores,
    general

  }

});
