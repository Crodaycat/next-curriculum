import { FC } from 'react';

export interface ProgressBarPros {
  progressColor?: string;
  percentage?: number;
}

export const ProgressBar: FC<ProgressBarPros> = ({
  percentage = 0,
  progressColor = 'primary',
}) => (
  <div className={`progress-bar text-${progressColor}-A400`}>
    <div
      className='progress-bar__fill'
      style={{ width: `${percentage}%` }}
    ></div>
  </div>
);
