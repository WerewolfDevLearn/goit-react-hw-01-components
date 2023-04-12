import user from "./json/user.json";
import Profile from "./components/Profile/Profile";
function App() {
  return <Profile user={user} />;
}
export default App;
