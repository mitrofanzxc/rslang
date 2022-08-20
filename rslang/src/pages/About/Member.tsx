import React from 'react';
import { Header } from '../../components/Header';
import { memberType } from './types';

interface propAbout {
  member: memberType;
}

const Member: React.FC<propAbout> = ({ member }) => {
  return (
    <div className="member">
      <img className="member_img" src={member.img} alt={`${member.name}`} />
      <div className="member_info">
        <h3 className="member_info_name">{member.name}</h3>
        <a className="member_info_link" target="blank" href={member.link}>
          {' '}
          {member.gitName}
          <img className="image" src={member.gitImg} alt="githubImg" />
        </a>
        <h3>{member.position}</h3>
        <div>{member.contribution}</div>
      </div>
    </div>
  );
};

export default Member;
