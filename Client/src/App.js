import "./App.css";
// commemted out by Austin
import Button from "react-bootstrap/Button"
// commemted out by Austin
import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "./components/TopNav";
import Header from "./components/Header";
import HeroSection from "./pages/HeroSection";
import BodyMid from "./pages/BodyMid";
import Body from "./pages/Body";
import Footer from "./components/Footer";
import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";
import InitialLoad from "./pages/InitialLoad";
import About from "./pages/About";
import NewUser from "./pages/NewUser";
import ReturnUser from "./pages/ReturnUser";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

// commemted out by Austin
 import {
   ApolloClient,
   InMemoryCache,
   ApolloProvider,
   createHttpLink,
 } from '@apollo/client';
 import { setContext } from '@apollo/client/link/context';

//  import Footer from './components/Footer';
 const httpLink = createHttpLink({
   uri: '/graphql',
 });

//  Construct request middleware that will attach the JWT token to every request as an `authorization` header
 const authLink = setContext((_, { headers }) => {
  //  get the authentication token from local storage if it exists
   const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
   return {
     headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
   },
  };
 });

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
 });
 <><ApolloProvider client={client}>
</ApolloProvider>
  // <HeroSection />
  <BodyMid /><Body /><Footer /><Dogs /><Cats /></>

// commemted out by Austin
      

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/returnuser" element={<ReturnUser />} />
        <Route path="/" element={<InitialLoad />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
