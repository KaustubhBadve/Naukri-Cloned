import './App.css';
import Subscription from './Components/Subscription/Subscription';
import {Route, Routes} from 'react-router-dom'
import Checkout from './Components/CheckoutfrmSubscription/checkout';
import CheckoutCardDetails from './Components/CheckoutfrmSubscription/CheckoutCardDetails';
import Otp from './Components/CheckoutfrmSubscription/Otp';
import Confirmation from './Components/CheckoutfrmSubscription/Confirmation';


// use StyleSheet.module for css

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/subscription' element={<Subscription/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/payment' element={<CheckoutCardDetails/>}></Route>
        <Route path='/CaptureOtp' element={<Otp/>}></Route>
        <Route path='/confirmation' element={<Confirmation/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
