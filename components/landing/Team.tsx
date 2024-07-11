import React from 'react';
import { Linkedin, Globe, Twitter, Github } from 'lucide-react';
import Image from 'next/image';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
  twitter?: string;
  bio?: string; // Adding bio field
};

const teamData: TeamMember[] = [
  {
    id: 1,
    name: 'Joseph Kibuchi',
    role: 'Fullstack Developer',
    image: '/paka.jpg',
    github: 'https://github.com/kibuchijw',
    linkedin: 'https://www.linkedin.com/in/joseph-k-25a17a78/',
    portfolio: 'https://quxpta.tech',
    twitter: 'https://twitter.com/quxpta',
    bio: 'Joseph Kibuchi is an ALX-trained Software Engineer. He has a marketing background, and is keen on building customer-centric solutions.',
  },
];

const Team = () => {
  return (
    <section className='m-10'>
      <h2 className='text-cyan-500 text-3xl font-bold text-center mb-8'>
        Meet the Team
      </h2>
      <div className='container mx-auto px-4 py-6 md:py-8 md:px-12 items-center rounded-2xl border border-b-cyan-500 shadow-xl'>
        <div className='grid  rounded-2xl border border-b-cyan-500 shadow-xl'>
          {teamData.map((member) => (
            <div
              key={member.id}
              className='flex flex-col items-center p-6 rounded-xl shadow-md text-center'
            >
              <Image
                src={member.image}
                alt={member.name}
                className='w-24 h-24 rounded-full mb-4 mx-auto shadow-xl'
                width={100}
                height={100}
              />
              <h3 className='text-2xl font-bold mb-2 text-cyan-500'>
                {member.name}
              </h3>
              <p className='text-lg text-cyan-500 mb-2'>{member.role}</p>
              <p className='text-xl mb-4 px-4'>{member.bio}</p>
              <div className='flex justify-center space-x-4'>
                {member.github && (
                  <a
                    href={member.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Github className='w-8 h-8 text-cyan-500 hover:text-cyan-800 transition duration-300' />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Linkedin className='w-8 h-8 text-cyan-500 hover:text-cyan-800 transition duration-300' />
                  </a>
                )}
                {member.portfolio && (
                  <a
                    href={member.portfolio}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Globe className='w-8 h-8 text-cyan-500 hover:text-cyan-800 transition duration-300' />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Twitter className='w-8 h-8 text-cyan-500 hover:text-cyan-800 transition duration-300' />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
