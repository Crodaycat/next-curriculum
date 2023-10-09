import { FC } from 'react';

export interface EducationItemProps {
  academyName: string;
  role: string;
  period: string;
  title: string;
  description: string;
}

export const EducationItem: FC<EducationItemProps> = ({
  academyName,
  role,
  period,
  title,
  description,
}) => (
  <div className='w-full flex gap-4'>
    <div className='w-2/5'>
      <h3 className='text-lg font-medium mb-7'>{academyName}</h3>

      <div className='flex gap-5 items-center'>
        <span>{role}</span>
        <span className='text-xxs text-primary-A100 bg-primary-contrast-A100 h-4 px-2 flex items-center'>
          {period}
        </span>
      </div>
    </div>

    <div className='w-3/5'>
      <h3 className='text-lg font-medium mb-7'>{title}</h3>

      <p className='text-secondary-400'>{description}</p>
    </div>
  </div>
);
