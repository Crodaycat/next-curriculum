import { FC } from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export const LinksBar: FC = () => (
  <section className='w-24 bg-primary-contrast-400 flex flex-col flex-none items-center pt-18 h-svh sticky top-0'>
    <span className='font-bold text-lg pt-2 mt-16'>Links</span>

    <div className='flex flex-col gap-4 pt-5'>
      <a
        className='bg-primary-contrast-A700 w-12 h-12 rounded-full flex justify-center items-center text-2xl'
        href='https://github.com/Crodaycat'
        target='_blank'
      >
        <FaGithub />
      </a>

      <a
        className='bg-primary-contrast-A700 w-12 h-12 rounded-full flex justify-center items-center text-2xl'
        href='https://www.linkedin.com/in/luis-alfonso-giraldo-murillo-717aa7127'
        target='_blank'
      >
        <FaLinkedinIn />
      </a>

      <a
        className='bg-primary-contrast-A700 w-12 h-12 rounded-full flex justify-center items-center text-2xl'
        href='mailto:lgiraldomu@gmail.com'
      >
        <FaEnvelope />
      </a>
    </div>
  </section>
);
