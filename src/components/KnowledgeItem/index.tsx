import { FC, ReactNode } from 'react';

export interface KnowledgeItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const KnowledgeItem: FC<KnowledgeItemProps> = ({
  icon,
  title,
  description,
}) => (
  <div className='bg-primary-contrast-400 h-64 w-full flex flex-col p-6 gap-4 items-center justify-center'>
    <div className='text-primary-A400 w-16 h-16'>{icon}</div>
    <h3 className='text-lg font-medium'>{title}</h3>
    <p className='text-secondary-400 h-12 text-center'>{description}</p>
  </div>
);
