# Beauty Salon
Beauty Salon is a Web Application representing a small local business. It's main purpose is to provide customers with information such as prices for services, location and more. Additionally people are able to make an appointment for offered services and purchase products at home. A great benefit of being registered is that each time a product is buyed or an appointment is completed they earn points which can be used for discounts. Another opportunity is to become independent consultant and win money by promoting our products. Admin panel is provided for employees to keep on track of new appointments, messages and new members of "Our Family" promoters.

## 1. How is it built
The Front-End part is build with React and uses two types of styling (SCSS & module) just for the sake of training purposes.
The Back-End part is based on firebase. 
    For storing data is used Cloud Firestore. 
    For storing files is used Storage provided by Firebase.
    For Authentication methods Email/Password and Google options are enabled.

## 2. Functionality
Unauthorized users have access to the full functionality of the application except using the profile page.
Authorized users can change their profile settings and review their orders.
Authorized users with admin roles have access to the dashboard where they can upload new products and approve new requests and keep on track of appointments for today.
Stripe payment is implemented and admins have additional dashboard. There they can review all of the details of a purchase and completed the order.

## Routes

| Route                             | Description                                            |
| --------------------------------- | ------------------------------------------------------ |
| /                                 | Homepage                                               |
| /signin                           | Sign in & Sign up Page                                 |
| /products                         | Products Collections Overview Page                     |
| /products/:category               | Products Specific Collection Overview Page             |
| /services                         | Services Overview Page                                 |
| /services/:type                   | Specific Services Overview Page                        |
| /about-us                         | About Us Page                                          |
| /contacts                         | Contacts Page                                          |
| /checkout                         | Checkout Page                                          |
| /wish-list                        | Wish List Page                                         |
| /appointment                      | Make An Appointment Page                               |
| /registrationathome               | Our Family Info and Registration Page                  |
| /plastic-for-change               | Community Trade Recycled Plastic Info Page             |
| /profile                          | Profile Page                                           |
| /profile/settings                 | Profile Settings Page                                  |
| /profile/orders                   | Profile Orders Page                                    |
| /dashboard                        | Dashboard Pending Appointments Page                    |
| /dashboard/appointments           | Dashboard Appointments For Today Page                  |
| /dashboard/messages               | Dashboard New Messages Page                            |
| /dashboard/registered-our-family  | Dashboard New Family Members Page                      |
| /dashboard/add-product            | Dashboard Upload Product Page                          |



## Project set up and running
* After cloning the repo, run **`npm install`**
* Run **`npm run start`**

### The app runs on **`localhost:3000`**


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
