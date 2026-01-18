import UserProfile from './UserProfile';
import UserContext from './UserContext';

function App() {
  const userData = { name: 'Jane Doe', age: 30, bio: 'A React enthusiast' };

  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
