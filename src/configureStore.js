import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux';
 
export default function configureStore() {  
    const middleware = [
        thunk
    ];
  
    // In development, use the browser's Redux dev tools extension if installed
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
      enhancers.push(window.devToolsExtension());
    }
  
    // add anything ...
    const rootReducer = combineReducers({
      ...reducers
    });
  
    return createStore(
      rootReducer,
      compose(applyMiddleware(...middleware), ...enhancers)
    );
  }