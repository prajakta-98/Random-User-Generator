import { useEffect, useState } from "react";

const RandomUser = () => {
  const [user, setUser] = useState(null);
//   Function to Fetch User from API
  const fetchUser = async () => {
    const response = await fetch("https://fakestoreapi.com/users"); // API URL ro be inserted here.
    const data = await response.json();
    const randomUser = data[Math.floor(Math.random() * data.length)];
    setUser(randomUser);
  };

  useEffect(() => {
    fetchUser(); // will fetch the users data
  }, []);

  return (
    <>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Random User Generator</h2>
        {user ? (
          <div>
            <h3>{` ${user.name.firstname}${user.name.lastname}`} </h3>
            <p>{`${user.name.lastname}`}</p>
          </div>
        ) : (
          <p>Loding...</p>
        )}

        <button onClick={fetchUser}>Get New User</button>
      </div>
    </>
  );
};
export default RandomUser;
