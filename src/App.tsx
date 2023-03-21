import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import ProfileForm from "./screens/RegisterStudents";
import { Provider } from "react-redux";
import store from "./store/store";
import ProfileScreen from "./screens/ProfileScreen";
import Footer from "./components/Footer";
import About from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import { useEffect } from "react";

import AOS from "aos";

function App() {
  AOS.init();

  return (
    <Provider store={store}>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<ProfileForm />} />

        <Route
          path="/dashboard"
          element={<ProfileScreen activeLink="dashboard" />}
        />
        <Route
          path="/addstudent"
          element={<ProfileScreen activeLink="addstudent" />}
        />
        <Route
          path="/addteacher"
          element={<ProfileScreen activeLink="addteacher" />}
        />

        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
