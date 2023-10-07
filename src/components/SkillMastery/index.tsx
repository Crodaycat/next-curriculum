import { Information, InformationProps } from '@/components/Information';
import { ProgressBar } from '@/components/ProgressBar';
import { FC } from 'react';

export interface SkillMasteryProps extends InformationProps {
  percentage?: number;
  progressColor?: string;
}

export const SkillMastery: FC<SkillMasteryProps> = ({
  percentage,
  progressColor = 'primary',
  ...informationProps
}) => (
  <div className='flex flex-col gap-1'>
    <Information {...informationProps} />

    <ProgressBar progressColor={progressColor} percentage={percentage} />
  </div>
);
