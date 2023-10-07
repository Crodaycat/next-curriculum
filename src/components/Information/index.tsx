import { FC } from 'react';

export interface InformationProps {
  titleColor?: string;
  title: string;
  informationColor?: string;
  information: string;
}

export const Information: FC<InformationProps> = ({
  title,
  titleColor = 'primary',
  information,
  informationColor = 'primary',
}) => (
  <div className='flex justify-between'>
    <span className={`text-${titleColor}-400`}>{title}</span>

    <span className={`text-${informationColor}-400`}>{information}</span>
  </div>
);
