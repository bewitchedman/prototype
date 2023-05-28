import Header from "./components/Header";
import Prototypes from "./components/Prototypes";
import Orders from "./components/Orders";
import Footer from "./components/Footer";
import AppStateProvider from "./providers/AppStateProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <AppStateProvider>
      <Header />
      <div className="container">
        <Prototypes />
        <Orders>
          <BrowserRouter>
            <Switch>
              <Route path="/checkout" component={Checkout} />
            </Switch>
          </BrowserRouter>
        </Orders>
        <Footer />
      </div>
    </AppStateProvider>
  );
}

export default App;
