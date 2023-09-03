import {
  BrowserRouter as Browser,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

export const App = () => {
  return <AppRoutes />;
};

const AppRoutes = () => {
  return (
    <>
      <Browser>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
          <Route
            path="dash"
            element={<Dashboard />}
          >
            <Route
              index
              path="users"
              element={<UsersPage />}
            />
            <Route
              path="events"
              element={<EventsPage />}
            />
          </Route>
        </Routes>
      </Browser>
    </>
  );
};

const UsersPage = () => {
  return <p>users</p>;
};
const EventsPage = () => {
  return <p>events</p>;
};

const Dashboard = () => {
  return (
    <>
      <h1>navbar</h1>
      <Outlet />
      <h1>footer</h1>
    </>
  );
};

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};
const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};
