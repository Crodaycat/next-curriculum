import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { FC, ReactNode } from 'react';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children?: ReactNode;
}

export const Modal: FC<ModalProps> = ({ open, onClose, title, children }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle className='text-2xl font-bold'>{title}</DialogTitle>
    <DialogContent>{children}</DialogContent>
  </Dialog>
);
