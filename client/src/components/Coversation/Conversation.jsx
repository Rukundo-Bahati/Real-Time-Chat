import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../api/UserRequests";

const Conversation = ({ data, currentUser, online }) => {
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.members && currentUser) {
      const userId = data.members.find((id) => id !== currentUser);
      console.log("User ID found:", userId); // Debugging
      if (userId) {
        const getUserData = async () => {
          try {
            const response = await getUser(userId);
            console.log("API response data:", response.data); // Debugging
            setUserData(response.data);
            dispatch({ type: "SAVE_USER", data: response.data });
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        };

        getUserData();
      }
    }
  }, [data, currentUser, dispatch]);

  console.log("Conversation component data:", data);
  console.log("User data:", userData);
  console.log("Is online:", online);

  return (
    <>
      <div className="follower conversation">
        <div>
          {online && <div className="online-dot"></div>}
          <img
            src={
              userData?.profilePicture
                ? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture
                : process.env.REACT_APP_PUBLIC_FOLDER + "defaultProfile.png"
            }
            alt="Profile"
            className="followerImage"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="name" style={{ fontSize: "0.8rem" }}>
            <span>
              {userData?.firstname} {userData?.lastname}
            </span>
            <span style={{ color: online ? "#51e200" : "" }}>
              {online ? "Online" : "Offline"}
            </span>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  );
};

export default Conversation;
