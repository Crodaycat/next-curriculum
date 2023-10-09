import { Modal } from '@/components/Modal';
import Image from 'next/image';
import { FC, ReactNode, useState } from 'react';

export interface JobExperienceCardProps {
  companyName: string;
  companyLogo: string;
  position: string;
  timePeriod: string;
  mainAchievement: string;
  children?: ReactNode;
}

export const JobExperienceCard: FC<JobExperienceCardProps> = ({
  companyName,
  companyLogo,
  position,
  timePeriod,
  mainAchievement,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDialog = () => setIsOpen(true);

  const onCloseDialog = () => setIsOpen(false);

  return (
    <div className='bg-primary-contrast-400 w-80 h-full flex flex-col'>
      <Image
        className='w-80 h-80 object-cover'
        src={companyLogo}
        alt={companyName}
        width={512}
        height={512}
      />

      <div className='m-6 flex flex-col items-start gap-2 flex-1'>
        <span className='text-lg font-medium'>{companyName}</span>

        <span className='font-medium text-secondary-400'>{position}</span>

        <span className='text-sm text-primary-A100 bg-primary-contrast-A100 h-5 px-2 flex items-center'>
          {timePeriod}
        </span>

        <p className='text-secondary-400'>
          <span className='text-primary-400'>Main Achievement: </span>
          {mainAchievement}
        </p>

        <button
          className='mt-auto text-primary-A400 font-medium'
          onClick={onOpenDialog}
        >
          Learn More
        </button>
      </div>

      <Modal open={isOpen} onClose={onCloseDialog} title={companyName}>
        <div className='flex flex-col gap-3 items-start'>
          <span className='font-medium text-secondary-400'>{position}</span>

          <span className='text-sm text-primary-A100 bg-primary-contrast-A100 h-5 px-2 flex items-center'>
            {timePeriod}
          </span>

          {children}

          <p className='text-secondary-400'>
            <span className='text-primary-400'>Main Achievement: </span>
            {mainAchievement}
          </p>
        </div>
      </Modal>
    </div>
  );
};
