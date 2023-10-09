import { ExtraSkill } from '@/components/ExtraSkill';
import { Information } from '@/components/Information';
import { SkillMastery } from '@/components/SkillMastery';
import Image from 'next/image';
import { FC } from 'react';

export const PersonalInformation: FC = () => (
  <section className='personal-info'>
    <div className='relative'>
      <Image
        src='/images/profile_picture.jpg'
        alt='Profile image'
        className='h-36 w-36 rounded-full object-cover object-top shadow'
        width={144}
        height={144}
      />

      <div className='absolute h-4 w-4 bg-success-400 rounded-full right-4 bottom-3 shadow-lg'></div>
    </div>

    <span className='text-lg font-medium mt-8'>Luis Giraldo</span>
    <span className='text-sm text-secondary-400'>Full-Stack Developer</span>

    <hr className='mt-16' />

    <article className='flex flex-col gap-2 w-full'>
      <Information title='Age:' information='27' />

      <Information title='Residence:' information='Col' />

      <Information
        title='Freelance:'
        information='Unavailable'
        informationColor='danger'
      />

      <Information title='Address:' information='Bello, Ant' />
    </article>

    <hr />

    <article className='flex flex-col gap-2 w-full'>
      <span className='text-lg mb-2'>Languages</span>

      <SkillMastery
        title='Spanish'
        titleColor='secondary'
        information='100%'
        informationColor='secondary'
        progressColor='primary'
        percentage={100}
      />

      <SkillMastery
        title='English'
        titleColor='secondary'
        information='74%'
        informationColor='secondary'
        progressColor='primary'
        percentage={74}
      />
    </article>

    <hr />

    <article className='flex flex-col gap-2 w-full'>
      <span className='text-lg mb-2'>Programming Languages</span>

      <SkillMastery
        title='Java'
        titleColor='secondary'
        information='90%'
        informationColor='secondary'
        progressColor='primary'
        percentage={90}
      />

      <SkillMastery
        title='JavaScript'
        titleColor='secondary'
        information='80%'
        informationColor='secondary'
        progressColor='primary'
        percentage={80}
      />

      <SkillMastery
        title='SQL/PLSQL'
        titleColor='secondary'
        information='70%'
        informationColor='secondary'
        progressColor='primary'
        percentage={70}
      />
    </article>

    <hr />

    <article className='flex flex-col gap-2 w-full'>
      <span className='text-lg mb-2'>Extra Skills</span>

      <ExtraSkill description='Software Development: DomainDriven Design (DDD), SOLID , GoF Patterns.' />

      <ExtraSkill description='Reactive, Clean, Microservices and Hexagonal Architectures.' />

      <ExtraSkill description='BACKEND: Java (Preferred), SpringBoot (Preferred), JavaScript /Node / Spring Webflux' />

      <ExtraSkill description='Unit testing with JUnit, Mockito, Jest, Integration Testing and TestDriven Development (TDD).' />

      <ExtraSkill description='Cloud - AWS: EC2, S3, Lambda functions, Api Gateway, RDS, SNS,SQS, and Cognito.' />

      <ExtraSkill description='DATABASES: SQL MySql / Oracle / PostgreSQL / SQL Server. NoSQL MongoDB / Neo4J' />

      <ExtraSkill description='Fast learning ability.' />

      <ExtraSkill description='Teamworking ability.' />

      <ExtraSkill
        description={`I'm a fast thinker and a creative problems solver.`}
      />
    </article>
  </section>
);
