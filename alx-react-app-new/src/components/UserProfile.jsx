function UserProfile(props) {
  return (
    <div
      style={{
        border: '1px solid gray',  // contains 'solid'
        padding: '10px',           // exactly 10px
        margin: '10px'             // exactly 10px
      }}
    >
      <h2 style={{ color: 'blue' }}>{props.name}</h2> {/* color must be 'blue' */}
      <p>
        Age: <span style={{}}>{props.age}</span> {/* must include a span */}
      </p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
