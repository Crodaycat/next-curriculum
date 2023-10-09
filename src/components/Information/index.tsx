import { FC } from 'react';

type Color = 'primary' | 'secondary' | 'success' | 'danger';
export interface InformationProps {
  titleColor?: Color;
  title: string;
  informationColor?: Color;
  information: string;
}

interface ColorsMap {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
}

const colorsMap: ColorsMap = {
  primary: 'text-primary-400',
  secondary: 'text-secondary-400',
  success: 'text-success-400',
  danger: 'text-danger-400',
};

export const Information: FC<InformationProps> = ({
  title,
  titleColor = 'primary',
  information,
  informationColor = 'primary',
}) => (
  <div className='flex justify-between'>
    <span className={colorsMap[titleColor] || 'text-primary-400'}>{title}</span>

    <span className={colorsMap[informationColor] || 'text-primary-400'}>
      {information}
    </span>
  </div>
);
