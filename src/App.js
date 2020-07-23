import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import ProductsPage from './pages/products/products.component';
import ProductsCollectionPage from './pages/products-collection/products-collection.component';
import ProductPreview from './components/product-preview/product-preview.component';

import ProductsState from './contexts/products/products.state';
import ServicesState from './contexts/services/services.state';
import CurrentUserContext from './contexts/current-user/current-user.context';
import CheckoutPage from './pages/checkout/checkout.component';
import ServicesPage from './pages/services/services.component';
import ServiceOverview from './components/service-overview/service-overview.component';

class App extends React.Component {
  constructor(props) {
    super(props);

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
              <ServicesState>
                <Route exact path="/products" component={ProductsPage} />
                <Route path="/products/:category/:item" component={ProductPreview} />
                <Route path="/products/:category" component={ProductsCollectionPage} />
                <Route exact path="/checkout" component={CheckoutPage} />
                <Route exact path="/services" component={ServicesPage} />
                <Route path="/services/:type" component={ServiceOverview} />
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
              </ServicesState>
            </ProductsState>
          </Switch>
        </div>
          <Footer />
      </div>
    );
  }
}

export default App;
