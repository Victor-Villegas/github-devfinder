import React, { FC } from 'react';
import './ReposInfo.css';
import { useQuery } from '@tanstack/react-query';
import fetchGitHubProfile from '../../../../../utils/fetchGitHubProfile';

interface Props {
  username: string;
}

const ReposInfo: FC<Props> = ({ username }) => {
  const { data } = useQuery({
    queryKey: ['githubProfile', username],
    queryFn: () => fetchGitHubProfile(username),
    enabled: !!username,
  });

  if (!data) return null;

  return (
    <div className="repos-information">
      <div className="repos-block">
        <p>Repos</p>
        <p>{data.public_repos}</p>
      </div>

      <div className="repos-block">
        <p>Followers</p>
        <p>{data.followers}</p>
      </div>

      <div className="repos-block">
        <p>Following</p>
        <p>{data.following}</p>
      </div>
    </div>
  );
};

export default ReposInfo;
