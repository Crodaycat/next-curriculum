import { Carousel } from '@/components/Carousel';
import { EducationItem } from '@/components/EducationItem';
import { JobExperienceCard } from '@/components/JobExperienceCard';
import { KnowledgeItem } from '@/components/KnowledgeItem';
import Image from 'next/image';
import { FC } from 'react';
import { FaDatabase, FaFlask, FaServer } from 'react-icons/fa';
import {
  MdArchitecture,
  MdArrowForward,
  MdCloud,
  MdPeopleAlt,
} from 'react-icons/md';
import { TbDeviceDesktopCode, TbPuzzleFilled } from 'react-icons/tb';

export const MainContent: FC = () => (
  <section className='w-full grid gap-11 px-2.5'>
    <header className='w-full bg-primary-contrast-400 flex gap-8 px-16'>
      <div className='flex flex-col gap-4 mt-20 mb-16 justify-between items-start'>
        <h1 className='text-5xl font-bold'>
          I&apos;m Luis Giraldo{' '}
          <span className='text-primary-A400 whitespace-nowrap'>
            Full-Stack
          </span>{' '}
          Developer
        </h1>

        <p className='text-secondary-400'>
          Fullstack developer with almost Six years of experience building
          software for e-commerce, educational, insurance, telecom, and Fintech
          fields. I develop back-end solutions with Java using SpringBoot
          Framework and JavaScript using Express, for front-end experiences I
          use React, Angular, or React Native. I enjoy sharing knowledge,
          teamwork, and making carpentry DIY projects. I consider myself a
          person who loves learning new things.
        </p>

        <a
          href='https://www.linkedin.com/in/luis-alfonso-giraldo-murillo-717aa7127'
          target='_blank'
        >
          <button
            title='Hire me'
            className='rounded-md bg-primary-contrast-A700 text-primary-A700 px-8 py-4 font-medium'
          >
            <span className='flex items-center gap-2'>
              HIRE ME <MdArrowForward />
            </span>
          </button>
        </a>
      </div>

      <Image
        src='/images/profile_picture.jpg'
        alt='Profile image'
        className='object-contain object-top object-center'
        width={360}
        height={480}
      />
    </header>

    <article className='w-full flex flex-col items-center'>
      <h2 className='font-bold text-3xl mb-6'>My Knowledge</h2>

      <p className='w-full max-w-lg text-secondary-400 text-center mb-12'>
        I develop back-end solutions with Java using SpringBoot Framework and
        JavaScript using Express, for front-end experiences I use React,
        Angular, or React Native.
      </p>

      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5'>
        <KnowledgeItem
          title='Front-End Development'
          description='Angular, React & React Native.'
          icon={<TbDeviceDesktopCode className='w-16 h-16' />}
        />

        <KnowledgeItem
          title='Back-End Development'
          description='Java - Spring Boot, JavaScript - Expressjs.'
          icon={<FaServer className='w-16 h-16' />}
        />

        <KnowledgeItem
          title='Testing'
          description='E2E, Unit, and Integration testing.'
          icon={<FaFlask className='w-16 h-16' />}
        />

        <KnowledgeItem
          title='Cloud'
          description='AWS & Azure.'
          icon={<MdCloud className='w-16 h-16' />}
        />

        <KnowledgeItem
          title='Software Architecture'
          description='Hexagonal, Clean, Microservices, Layered, Reactive.'
          icon={<MdArchitecture className='w-16 h-16' />}
        />

        <KnowledgeItem
          title='Databases'
          description='Relational (SQL), NoSQL (Mongo), and Graph DBs (Neo4J)'
          icon={<FaDatabase className='w-16 h-16' />}
        />

        <KnowledgeItem
          title='Design Patterns'
          description='GoF patterns.'
          icon={<TbPuzzleFilled className='w-16 h-16' />}
        />

        <KnowledgeItem
          title='Team Player'
          description='I love learning from and theaching others.'
          icon={<MdPeopleAlt className='w-16 h-16' />}
        />
      </div>
    </article>

    <article className='w-full flex flex-col items-center'>
      <h2 className='font-bold text-3xl mb-6'>Education</h2>

      <p className='w-full max-w-lg text-secondary-400 text-center mb-12'>
        I enjoy sharing knowledge, teamwork, andmaking carpentry DIY projects. I
        consider myself a person who loves learning new things.
      </p>

      <div className='w-full flex flex-col bg-primary-contrast-400 px-9 py-12'>
        <EducationItem
          academyName='University Of Antioquia'
          role='Student'
          period='August 2016 - Present'
          title='Systems Engineer'
          description='IX level Software Engineering Student with an Average grade of 4.0.'
        />

        <hr />

        <EducationItem
          academyName="Medellin's Technician laboral Institute (ITELME)"
          role='Student'
          period='February 2014 - December 2015'
          title='Computers Technician'
          description='Associate Degree.'
        />

        <hr />

        <EducationItem
          academyName='Education First (EF)'
          role='Student'
          period='June 2022'
          title='Standard English Test'
          description='EF SET English Certificate 74/100 (C2 Proficient)'
        />

        <hr />

        <EducationItem
          academyName='Lightbend, Inc.'
          role='Student'
          period='September 2022'
          title='Reactive Architecture'
          description='Introduction to Reactive Systems, Domain Driven Design, Reactive Microservices.'
        />

        <hr />

        <EducationItem
          academyName='Udemy'
          role='Student'
          period='May 2022'
          title='SOLID Principles & Clean Code'
          description='SOLID Principles & Clean Code online course.'
        />
      </div>
    </article>

    <article className='w-full flex flex-col items-center overflow-hidden'>
      <h2 className='font-bold text-3xl mb-6'>Work Experience</h2>

      <p className='w-full max-w-lg text-secondary-400 text-center mb-12'>
        Fullstack developer with almost Six years of experience building
        software for e-commerce, educational, insurance, telecom, and Fintech
        fields.
      </p>

      <Carousel>
        <JobExperienceCard
          companyName='Capgemini Engineering'
          companyLogo='/images/capgemini_engineering_logo.png'
          position='SOFTWARE ENGINEER'
          timePeriod='March 2023 - Present'
          mainAchievement='Work in an international and multicultural team with a client from the USA and improve conversational English skills.'
        >
          <ul>
            <li>
              - Backend development in Java with SpringBoot, and Oracle DB.
            </li>
            <li>- Frontend development with Angular 15.</li>
          </ul>
        </JobExperienceCard>

        <JobExperienceCard
          companyName='Experimentality Labs'
          companyLogo='/images/experimentality_labs_logo.png'
          position='FULLSTACK DEVELOPER'
          timePeriod='October 2020 - March 2023'
          mainAchievement='Learned best practices for software development, became a mentor for Mid and Junior Developers,project technical leader, and technical talks coordinator at Experimentality.'
        >
          <ul>
            <li>
              - React UI experiences for e-commerce integrations with VTEX.
            </li>
            <li>
              - Node-Express services for e-commerce integrations with VTEX.
            </li>
            <li>
              - Backend development in Java with SpringBoot, WebFlux, hibernate,
              and JDBC.
            </li>
            <li>- Frontend development with Angular 12+</li>
          </ul>
        </JobExperienceCard>

        <JobExperienceCard
          companyName='Drai - UdeA'
          companyLogo='/images/drai_udea_logo.jpg'
          position='WEB PAGES DESIGNER'
          timePeriod='August 2018 - November 2020'
          mainAchievement='Learn an unknown technology and deliver a high-quality product.'
        >
          <ul>
            <li>
              - Backend development in Java with SpringBoot, hibernate, JDBC,
              and Database modeling in Oracle.
            </li>
            <li>- Frontend development with Angular 5+</li>
          </ul>
        </JobExperienceCard>

        <JobExperienceCard
          companyName='Ingeni@ - UdeA'
          companyLogo='/images/ingenia_udea_logo.jpg'
          position='VIDEO GAMES DEVELOPER'
          timePeriod='March 2028 - July 2018'
          mainAchievement='Quick adaptation to a big existing project and managed it to be finally published.'
        >
          <ul>
            <li>- Develop videogames in C# language with Unity 3D.</li>
            <li>- API support with CakePHP.</li>
            <li>- Design and develop educative games.</li>
          </ul>
        </JobExperienceCard>
      </Carousel>
    </article>

    <footer className='w-full bg-primary-contrast-400 flex flex-col items-center py-5 mt-auto'>
      <span>2023 All Rights Reserved. Luis Giraldo</span>
    </footer>
  </section>
);
