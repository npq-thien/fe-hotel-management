import React, { useState } from "react";

import EditableField from "components/common/EditableField";
import { CustomerLayout } from "components/layout";
import { useGetProfile } from "api/authApi";


const ProfilePage = () => {
  const [isEditable, setIsEditable] = useState(false);

  const [username, setUsername] = useState("JohnDoe");

  // useGetProfile()

  return (
    <CustomerLayout>
      <div className="bg-white rounded-lg shadow-lg flex-col flex mx-auto p-8 m-4 gap-5 w-full max-w-md">
        <h3 className="text-primary h3-semibold">User information</h3>

        <div className="flex flex-col gap-2">
          <label className="text-dark-4">
            Username
          </label>
          <EditableField value={username} onChange={setUsername} isEditable={isEditable} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-dark-4">
            Full name
          </label>
          <EditableField value={username} onChange={setUsername} isEditable={isEditable} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-dark-4">
            Email
          </label>
          <EditableField value={username} onChange={setUsername} isEditable={isEditable} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-dark-4">
            Phone
          </label>
          <EditableField value={username} onChange={setUsername} isEditable={isEditable} />
        </div>
      </div>
    </CustomerLayout>
  );
};

export default ProfilePage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const EditableField = ({ label, value, onChange, isEditable }) => {
//   return (
//     <div className="flex flex-col gap-2">
//       <label className="text-dark-4">{label}</label>
//       {isEditable ? (
//         <input
//           type="text"
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           className="p-2 border rounded-lg"
//           placeholder={`Enter your ${label.toLowerCase()}`}
//         />
//       ) : (
//         <span className="p-2 border rounded-lg">{value}</span>
//       )}
//     </div>
//   );
// };

// const ProfilePage = () => {
//   const [profile, setProfile] = useState({
//     username: '',
//     fullName: '',
//     email: '',
//     phone: '',
//   });
//   const [isEditable, setIsEditable] = useState(false);

//   useEffect(() => {
//     // Fetch the profile data from the API
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get('/api/profile');
//         setProfile(response.data);
//       } catch (error) {
//         console.error('Error fetching profile data', error);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleInputChange = (field, value) => {
//     setProfile((prevProfile) => ({
//       ...prevProfile,
//       [field]: value,
//     }));
//   };

//   return (
//     <div>
//       <button onClick={() => setIsEditable(!isEditable)}>
//         {isEditable ? 'Save' : 'Edit'}
//       </button>
//       <EditableField
//         label="Username"
//         value={profile.username}
//         onChange={(value) => handleInputChange('username', value)}
//         isEditable={isEditable}
//       />
//       <EditableField
//         label="Full name"
//         value={profile.fullName}
//         onChange={(value) => handleInputChange('fullName', value)}
//         isEditable={isEditable}
//       />
//       <EditableField
//         label="Email"
//         value={profile.email}
//         onChange={(value) => handleInputChange('email', value)}
//         isEditable={isEditable}
//       />
//       <EditableField
//         label="Phone"
//         value={profile.phone}
//         onChange={(value) => handleInputChange('phone', value)}
//         isEditable={isEditable}
//       />
//     </div>
//   );
// };

// export default ProfilePage;

