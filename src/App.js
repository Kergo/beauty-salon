import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import ProductsPage from './pages/products/products.component';

import ProductsState from './contexts/products/products.state';
import CurrentUserContext from './contexts/current-user/current-user.context';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // Check if user exist into our database
      if (userAuth) {
        // Get the user reference from the userAuth object
        const userRef = await createUserProfileDocument(userAuth);

        // Set the user information into our state
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header />
        </CurrentUserContext.Provider>
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <ProductsState>
              <Route path="/products" component={ProductsPage} />
              <Route
                exact
                path="/signin"
                render={() =>
                  this.state.currentUser ? (
                    <Redirect to="/" />
                  ) : (
                    <SignInAndSignUpPage />
                  )
                }
              />
            </ProductsState>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
