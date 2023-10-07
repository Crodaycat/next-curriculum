import { Information } from '@/components/Information';
import { SkillMastery } from '@/components/SkillMastery';

export default function Home() {
  return (
    <main>
      <section className='personal-info'>
        <img
          src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg'
          alt='Profile image'
          className='h-36 w-36 rounded-full object-cover'
        />

        <span className='text-lg font-medium'>Luis Giraldo</span>
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

        <BsIntersect />
      </section>

      <section>Main</section>

      <section>Social Networks</section>
    </main>
  );
}
