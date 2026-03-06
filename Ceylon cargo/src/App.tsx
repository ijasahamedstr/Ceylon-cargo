import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Navbar from "./components/AppBar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Fixed: changed <Home} to <Home /> */}
        <Route path="/" element={<Home />} />
        
        <Route path="/tracking" element={<Typography variant="h4" sx={{ p: 4 }}>Tracking Page</Typography>} />
        <Route path="/booking" element={<Typography variant="h4" sx={{ p: 4 }}>Booking Page</Typography>} />
        <Route path="/payment" element={<Typography variant="h4" sx={{ p: 4 }}>Payment Page</Typography>} />
        <Route path="/services" element={<Typography variant="h4" sx={{ p: 4 }}>Services Page</Typography>} />
        <Route path="/about" element={<Typography variant="h4" sx={{ p: 4 }}>About Us Page</Typography>} />
        
        {/* Redirect any unknown routes back to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;