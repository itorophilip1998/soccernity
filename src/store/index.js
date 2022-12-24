import { configureStore } from "@reduxjs/toolkit";
import livescores from "./LiveScores";
import general from "./General";
// import auth from "./Auth";
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
