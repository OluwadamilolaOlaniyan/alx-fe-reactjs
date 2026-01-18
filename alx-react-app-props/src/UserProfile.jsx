import { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  const userData = useContext(UserContext); // get data from context

  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
      }}
    >
      <h2 style={{ color: 'blue' }}>{userData.name}</h2>
      <p>
        Age: <span>{userData.age}</span>
      </p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
}

export default UserProfile;
