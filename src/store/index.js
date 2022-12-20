import { configureStore } from "@reduxjs/toolkit";
import livescores from "./LiveScores";
import general from "./General";
import blog from "./Blog";
import community from "./Community";
export const store = configureStore({
  reducer: {
    livescores,
    general,
    blog,
    community
  }

});
