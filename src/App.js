import './App.css';
import Subscription from './Components/Subscription/Subscription';
import {Route, Routes} from 'react-router-dom'
import Checkout from './Components/CheckoutfrmSubscription/checkout';
import CheckoutCardDetails from './Components/CheckoutfrmSubscription/CheckoutCardDetails';
import Otp from './Components/CheckoutfrmSubscription/Otp';
import Confirmation from './Components/CheckoutfrmSubscription/Confirmation';
import LoginPage from "../src/Components/RegisterAndLogin/login/LoginPage";
import RegisterPage from "../src/Components/RegisterAndLogin/register/RegisterPage";
import OtpPage from "../src/Components/RegisterAndLogin/otp/OtpPage"
import Employement from "../src/Components/RegisterAndLogin/employement/Employement"
import Education from "../src/Components/RegisterAndLogin/education/Education"
import Body from './Components/HomePageBody/Body';

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
        {/* REGISTRATION AND LOGIN */}
        <Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/otp" element={<OtpPage />} />
				<Route path="/employement" element={<Employement />} />
				<Route path="/education" element={<Education />} />
        {/* REGISTRATION AND LOGIN */}
        <Route path="/home" element={<Body/>}/>
      </Routes>
    </div>
  );
}

export default App;
