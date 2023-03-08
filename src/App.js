import './App.css';
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css';

// commemted out by Austin
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import TopNav from "./components/TopNav";
import Header from "./components/Header";
import HeroSection from './pages/HeroSection';
import BodyMid from './pages/BodyMid'
import Body from "./pages/Body";
import Footer from "./components/Footer";
import Dogs from './pages/Dogs';
import Cats from './pages/Cats';

 import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
// commemted out by Austin
// import Footer from './components/Footer';
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// // Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <div className="App">
       {/* commemted out by Austin */}
      {/* <ApolloProvider client={client}> */}
      {/* <BrowserRouter/> */}
      <Header />
      {/* <Routes> */}

        {/* cut for now by Austin */}
{/* <Route path="/signup" element={<SignUp/>}/>  */}
{/* cut by Austin */}
{/* <Route path="/signin" element={<SignIn/>}/> */}
{/* <Route path="/dogs" element={<Dogs/>}/> */}
{/* <Route path="/cats" element={<Cats/>}/> */}
        {/* </Routes> */}
      <HeroSection />
      <Dogs />
      <Cats />
      <BodyMid />
      <Body />
      {/* </ApolloProvider> */}
    </div>
  );
}

export default App;