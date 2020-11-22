import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import App from "./components/app/app";
import reviews from "./mocks/reviews";
import rootReducer from "./store/reducers/root-reducer";
import {fetchOfferList} from "./store/reducers/api-actions";

const api = createAPI();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(fetchOfferList());

ReactDOM.render(
    <Provider store={store}>
      <App
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
