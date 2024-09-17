/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./service/store/store.js";
import ShopProductContext from "./Contexts/ShopProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Router>
		<ShopProductContext>
			<Provider store={store}>
				<App />
			</Provider>
		</ShopProductContext>
	</Router>
);
