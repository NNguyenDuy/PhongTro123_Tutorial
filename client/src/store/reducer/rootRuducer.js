import userRuder from "./userRuducer";
import authReducer from "./authRuducer";
import postReducer from "./postRudecer";
import appReducer from "./appReducer";
import { combineReducers } from "redux"
import storage from "redux-persist/lib/storage"
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist"

const commonConfig = {
  storage,
  stateReconsiler: autoMergeLevel2
}

const authConfig = {
  ...commonConfig,
  key: "auth",
  whitelist: ["isLoggedIn", "token"]
}

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  user: userRuder,
  post: postReducer,
  app: appReducer
})

export default rootReducer
