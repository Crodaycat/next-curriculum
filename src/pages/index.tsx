import { ExtraSkill } from '@/components/ExtraSkill';
import { Information } from '@/components/Information';
import { SkillMastery } from '@/components/SkillMastery';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Home() {
  return (
    <main>
      <section className='personal-info'>
        <img
          src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg'
          alt='Profile image'
          className='h-36 w-36 rounded-full object-cover'
        />

        <span className='text-lg font-medium mt-8'>Luis Giraldo</span>
        <span className='text-sm text-secondary-400'>Full-Stack Developer</span>

        <hr className='mt-16' />

        <article className='flex flex-col gap-2 w-full'>
          <Information title='Age:' information='27' />

          <Information title='Residence:' information='Col' />

          <Information title='Freelance:' information='Unavailable' />

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
            information='73%'
            informationColor='secondary'
            progressColor='primary'
            percentage={73}
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

      <section>Main</section>

      <section className='w-24 bg-primary-contrast-400 flex flex-col items-center pt-18'>
        <span className='font-bold text-lg pt-2'>Links</span>

        <div className='flex flex-col gap-4 pt-5'>
          <a
            className='bg-primary-contrast-A700 w-12 h-12 rounded-full flex justify-center items-center text-2xl'
            href='/#'
            target='_blank'
          >
            <FaGithub />
          </a>

          <a
            className='bg-primary-contrast-A700 w-12 h-12 rounded-full flex justify-center items-center text-2xl'
            href='/#'
            target='_blank'
          >
            <FaLinkedinIn />
          </a>
        </div>
      </section>
    </main>
  );
}
