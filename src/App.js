import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ProductsPage from './pages/products/products.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ServicesPage from './pages/services/services.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ProductsCollectionPage from './pages/products-collection/products-collection.component';
import ContactsPage from './pages/contacts/contacts.component';
import WishListPage from './pages/wish-list/wish-list.component';
import DashboardPage from './pages/dashboard/dashboard.component';
import ProfilePage from './pages/profile/profile.component';
import PlasticForChangePage from './pages/plastic-for-change/plastic-for-change.component';
import OrderCompletedPage from './pages/order-completed/order-completed.component';
import RegistrationAtHomePage from './pages/registration-at-home/registration-at-home.component';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import ProductPreview from './components/product-preview/product-preview.component';
import ServiceOverview from './components/service-overview/service-overview.component';
import AppointmentPopup from './components/appointment-form/appointment-form.component';
import ForgotPasswordPopup from './components/forgot-password-popup/forgot-password-popup.component';
import FormSubmited from './components/form-submited/form-submited.component';

import ProductsState from './contexts/products/products.state';
import ServicesState from './contexts/services/services.state';
import CurrentUserContext from './contexts/current-user/current-user.context';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {
        email: '',
        displayName: '',
      },
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
      <CurrentUserContext.Provider value={this.state.currentUser}>
        <div>
          <Header />
          <div className="wrapper">
            <Switch>
              <ProductsState>
                <ServicesState>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/products" component={ProductsPage} />
                  <Route
                    path="/products/:category/:item"
                    component={ProductPreview}
                  />
                  <Route
                    path="/products/:category"
                    component={ProductsCollectionPage}
                  />
                  <Route exact path="/checkout" component={CheckoutPage} />
                  <Route exact path="/services" component={ServicesPage} />
                  <Route path="/services/:type" component={ServiceOverview} />
                  <Route exact path="/contacts" component={ContactsPage} />
                  <Route exact path="/wish-list" component={WishListPage} />
                  <Route
                    path="/profile"
                    render={() =>
                      !this.state.currentUser ? (
                        <Redirect to="/signin" />
                      ) : (
                        <ProfilePage />
                      )
                    }
                  />
                  <Route
                    exact
                    path="/plastic-for-change"
                    component={PlasticForChangePage}
                  />
                  <Route path="/appointment" component={AppointmentPopup} />
                  <Route
                    path="/form-submited"
                    component={FormSubmited}
                  />
                  <Route
                    path="/order-completed"
                    component={OrderCompletedPage}
                  />
                  <Route
                    path="/reset-password"
                    component={ForgotPasswordPopup}
                  />
                  <Route
                    path="/registrationathome"
                    component={RegistrationAtHomePage}
                  />
                  <Route
                    path="/dashboard"
                    render={() =>
                      this.state.currentUser.role === 'admin' ? (
                        <DashboardPage />
                      ) : (
                        <Redirect to="/" />
                      )
                    }
                  />
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
      </CurrentUserContext.Provider>
    );
  }
}

export default App;
