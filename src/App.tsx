import Section from "./components/Section/Section";
import user from "./json/user.json";
import data from "./json/data.json";
import friends from "./json/friends.json";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";

export default function App() {
  return (
    <Section>
      <Profile user={user} />;
      <Statistics title='Upload stats' stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </Section>
  );
}
