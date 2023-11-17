import React, { FC } from 'react';
import './UserProfile.css';
import ProfilePicture from '../../atoms/ProfilePicture/ProfilePicture';
import { useQuery } from '@tanstack/react-query';
import fetchGitHubProfile from '../../../utils/fetchGitHubProfile';
import Card from '../../atoms/Card/Card';
import BasicInfo from './components/BasicInfo/BasicInfo';
import ReposInfo from './components/ReposInfo/ReposInfo';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Message from '../../molecules/Message/Message';

interface Props {
  username: string;
}

const UserProfile: FC<Props> = ({ username }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['githubProfile', username],
    queryFn: () => fetchGitHubProfile(username),
    enabled: !!username,
  });

  if (isLoading) return <Message variant="warning">Loading...</Message>;

  if (isError)
    return <Message variant="error">Error fetching user profile</Message>;

  if (!data) return null;

  return (
    <Card className="user-profile">
      <ProfilePicture url={data.avatar_url} />

      <div className="user-information">
        <BasicInfo username={username} />
        <ReposInfo username={username} />
        <ContactInfo username={username} />
      </div>
    </Card>
  );
};

export default UserProfile;
