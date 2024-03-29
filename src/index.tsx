import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux"
import user from './app/services/user'

store.dispatch(user.endpoints.getMe.initiate())

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
      <Provider store={store}>
        <App />
      </Provider>
);
