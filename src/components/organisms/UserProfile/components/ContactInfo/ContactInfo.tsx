import React, { FC } from 'react';
import './ContactInfo.css';
import { useQuery } from '@tanstack/react-query';
import fetchGitHubProfile from '../../../../../utils/fetchGitHubProfile';
import Icon from '../../../../atoms/Icon/Icon';
import { FaLocationDot, FaTwitter } from 'react-icons/fa6';
import { NOT_AVAILABLE } from '../../../../../consts';
import { FaLink } from 'react-icons/fa';
import { BsBuildingsFill } from 'react-icons/bs';
import classNames from 'classnames';

interface Props {
  username: string;
}

const ContactInfo: FC<Props> = ({ username }) => {
  const { data } = useQuery({
    queryKey: ['githubProfile', username],
    queryFn: () => fetchGitHubProfile(username),
    enabled: !!username,
  });

  if (!data) return null;

  return (
    <div className="contact-info">
      <div
        className={classNames('location', {
          ['not-available']: !data.location,
        })}
      >
        <Icon size={1}>
          <FaLocationDot />
        </Icon>
        {data.location ?? NOT_AVAILABLE}
      </div>

      <div
        className={classNames('link', {
          ['not-available']: !data.blog,
        })}
      >
        <Icon size={1}>
          <FaLink />
        </Icon>
        {data.blog ?? NOT_AVAILABLE}
      </div>

      <div
        className={classNames('twitter', {
          ['not-available']: !data.twitter_username,
        })}
      >
        <Icon size={1}>
          <FaTwitter />
        </Icon>
        {data.twitter_username ?? NOT_AVAILABLE}
      </div>

      <div
        className={classNames('company', {
          ['not-available']: !data.company,
        })}
      >
        <Icon size={1}>
          <BsBuildingsFill />
        </Icon>
        {data.company ?? NOT_AVAILABLE}
      </div>
    </div>
  );
};

export default ContactInfo;
