//APP

//IMPORTING
//REACT
import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//COMPONENTS
import Loading from "./components/Loading";
import Footer from './components/Footer';
import Navbar from './components/Header';
//PAGES
import Home from "./pages/HomePage";
import Contact from "./pages/ContactPage";

//APP
function App() {
  //RETURN
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </Suspense>
  );
}

//EXPORTING APP
export default App;