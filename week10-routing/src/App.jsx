import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/neet/class11" element={<Class11 />} />
            <Route path="/neet/class12" element={<Class12 />} />
            <Route path="/neet/class13" element={<Class13 />} />
            <Route path="/neet/class10" element={<Class10 />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Header() {
  return (
    <div>
      <Link to="/">Home</Link> |<Link to="/neet/class11"> Class 11</Link> |
      <Link to="/neet/class12"> Class 12</Link>
    </div>
  );
}

function Footer() {
  return <div>contact US | MAP | Hello</div>;
}

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function ErrorPage() {
  return <div>No page found!</div>;
}

function Class11Program() {
  return <div>NEET programs for Class 11th</div>;
}

function Landing() {
  return <div>Radha Radha</div>;
}

function Class11() {
  return <div>class 11 content</div>;
}

function Class12() {
  const navigate = useNavigate();

  function redirectpage() {
    navigate("/");
  }

  return (
    <div>
      class 12 content
      <button onClick={redirectpage}>go to landing page</button>
    </div>
  );
}

function Class13() {
  return <div>class 13 content</div>;
}

function Class10() {
  return <div>class 10 content</div>;
}

export default App;
