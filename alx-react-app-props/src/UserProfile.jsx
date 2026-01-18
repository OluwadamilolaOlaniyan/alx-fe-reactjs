import { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  const userData = useContext(UserContext); // consume context

  return (
    <div
      style={{
        border: '1px solid gray',   // must include "solid"
        padding: '10px',            // must be "10px"
        margin: '10px',             // must be "10px"
        borderRadius: '5px'
      }}
    >
      <h2 style={{ color: 'blue' }}>{userData.name}</h2> {/* must include "blue" */}
      <p>
        Age: <span>{userData.age}</span> {/* must include "span" */}
      </p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
}

export default UserProfile;
