import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import Login from "./screens/AuthScreen/Login";
import ProfileForm from "./screens/PortalScreen/RegisterStudents";
import { Provider } from "react-redux";
import store from "./store/store";
import ProfileScreen from "./screens/PortalScreen/ProfileScreen";
import Footer from "./components/Footer";
import About from "./screens/AboutScreen/AboutScreen";
import ContactScreen from "./screens/ContactScreen/ContactScreen";
import "rodal/lib/rodal.css";

// export const serverUrl = ''

// import AOS from "aos";
import "react-toastify/dist/ReactToastify.css";
import PrincipalRoute from "./utils/PrincipalRoutes";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  // AOS.init();

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<ProfileForm />} />

          <Route
            path="/dashboard"
            element={<ProfileScreen activeLink="dashboard" />}
          />

          <Route path="/dashboard" element={<PrincipalRoute />}>
            <Route
              path="/dashboard"
              element={<ProfileScreen activeLink="dashboard" />}
            />
          </Route>

          <Route path="/dashboard/addstudent" element={<PrincipalRoute />}>
            <Route
              path="/dashboard/addstudent"
              element={<ProfileScreen activeLink="addstudent" />}
            />
          </Route>

          <Route path="/dashboard/viewteacher" element={<PrincipalRoute />}>
            <Route
              path="/dashboard/viewteacher"
              element={<ProfileScreen activeLink="viewteacher" />}
            />
          </Route>

          <Route path="/dashboard/addteacher" element={<PrincipalRoute />}>
            <Route
              path="/dashboard/addteacher"
              element={<ProfileScreen activeLink="addteacher" />}
            />
          </Route>

          <Route path="/dashboard/addsubject" element={<PrincipalRoute />}>
            <Route
              path="/dashboard/addsubject"
              element={<ProfileScreen activeLink="addsubject" />}
            />
          </Route>

          <Route
            path="/dashboard/mysubjects"
            element={<ProfileScreen activeLink="mysubjects" />}
          />
          {/* password-reset */}

          <Route
            path="/password-reset"
            element={<ProfileScreen activeLink="password-reset" />}
          />

          <Route
            path="/dashboard/myresults"
            element={<ProfileScreen activeLink="myresults" />}
          />

          <Route
            path="/dashboard/mysubjects/:subjectId"
            element={<ProfileScreen activeLink="dashboard/mysubjects/:subjectId" />}
          />
          <Route path="/contact" element={<ContactScreen />} />
        </Routes>
        <Footer />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
