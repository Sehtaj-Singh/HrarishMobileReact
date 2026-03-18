import Home from "./home/Home";
import Mobile from "./mobile/Mobile";

function App() {

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  if (slug) {
    return <Mobile slug={slug} />;
  }

  return <Home />;
}

export default App;