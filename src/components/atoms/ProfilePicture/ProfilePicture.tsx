import React, { FC } from 'react';
import './ProfilePicture.css';

interface Props {
  url: string;
}

const ProfilePicture: FC<Props> = ({ url }) => {
  return (
    <div className="profile-picture">
      <img src={url} alt="User profile picture" />
    </div>
  );
};

export default ProfilePicture;
