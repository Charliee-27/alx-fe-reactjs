

const UserProfile = (props) => {
    return (
      <div id='Card'>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
      </div>
    );
  };

  export default UserProfile