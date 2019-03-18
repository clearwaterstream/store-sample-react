# Store: A Sample React-Redux App

Bootstraped with [Create React App](https://github.com/facebook/create-react-app).

Ideas taken from React-Redux template from VS 2017 as well as [React-online-course](https://github.com/jsmegatools/React-online-course) by Sergey Smolin.

**Basic principles**:

* Dumb components: the UI components (or views) should only be concerned with rendering HTML and getting input (etc), they should not have knowledge outside of "props" (props is a local state endemic to each view)
* State-to-view binding is done *outside* the component (done in containers)
* App is laid out by feature, this is to enable a larger size application that's easier to manage. Multiple teams can work on independent features
* Common controls or utils can live in a shared folder so they can be leveraged in multiple features
* Logic (non-ui components) should be reusable in React Native, all the more reason to separate the dumb UI components out
* Paths (more then 1 level deep) should be absolute. This allows for easier refactoring
