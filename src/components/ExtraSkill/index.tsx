import { FC } from 'react';
import { BsIntersect } from 'react-icons/bs';

export interface ExtraSkillProps {
  description: string;
}

export const ExtraSkill: FC<ExtraSkillProps> = ({ description }) => (
  <div className='flex gap-2'>
    <div className='text-primary-A400 m-1'>
      <BsIntersect />
    </div>

    <p className='m-0 text-sm text-justify text-secondary-400'>{description}</p>
  </div>
);
