import React, { FC } from 'react';
import './BasicInfo.css';
import { DateTime } from 'luxon';
import { useQuery } from '@tanstack/react-query';
import fetchGitHubProfile from '../../../../../utils/fetchGitHubProfile';

interface Props {
  username: string;
}

const BasicInfo: FC<Props> = ({ username }) => {
  const { data } = useQuery({
    queryKey: ['githubProfile', username],
    queryFn: () => fetchGitHubProfile(username),
    enabled: !!username,
  });

  if (!data) return null;

  return (
    <div className="basic-info">
      <h1 className="user-name">{data.name}</h1>
      <a href={data.html_url} className="user-url">{`@${data.login}`}</a>
      <p className="user-bio">{data.bio}</p>
      <p className="joined-date">
        Joined {DateTime.fromISO(data.created_at).toFormat('dd LLL yyyy')}
      </p>
    </div>
  );
};

export default BasicInfo;
