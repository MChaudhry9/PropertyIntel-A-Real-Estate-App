import React, {useState, useEffect} from "react";
import { supabase } from "../supabaseClient";
import './Profile.css'

const QrCodeImgUrl = "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"

const Profile = () => {
  // const [userEmail, setUserEmail] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");
  
  useEffect(() => {
    const getUser = async () => {
      try {
        // Fetch the currently authenticated user
        const { data: { user }, error } = await supabase.auth.getUser();
        
        if (error) throw error;

        // Set the email to state if the user is logged in
        if (user) {
          setUserEmail(user.email);
          setUserId(user.id);
        }
      } catch (err) {
        console.error("Error fetching user data:", err.message);
      }
    };

    getUser();
  }, []);

  return (
    <div className="full-screen-container">
      <div className="inside-container" style={{alignItems: 'center'}}>
        <h2 style={{fontSize: '30px', textAlign: 'center'}}>My Profile</h2>
        <div className="profile-container">
          <div className="profile-container-info">
            <h2>Name: Jay Trivedi</h2>
            <h2>Account Num: {userId}</h2>
            <h2>Email: {userEmail}</h2>
          </div>
          <div className="profile-container-qr">
            <img src={QrCodeImgUrl} style={{width: '150px'}} alt="QR Code"/> 
            <h2 style={{textAlign: 'center', fontSize: '20px'}}>My Qr Code</h2>
          </div>
        </div>
        {/* <button className="feedback-btn">Feedback Form</button> */}
      </div>
    </div>
  )
}

export default Profile;