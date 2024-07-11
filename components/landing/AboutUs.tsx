import React from 'react';
import { Briefcase, Smile } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className='m-10'>
      <h2 className='text-cyan-500 text-3xl font-bold text-center mb-8'>
        About Us
      </h2>
      <div className='container mx-auto px-4 py-6 md:py-8 md:px-12 rounded-2xl border border-b-cyan-500 shadow-lg'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='p-6 rounded-xl shadow-2xl border border-b-cyan-500'>
            <div className='flex items-center mb-4'>
              <Briefcase className='w-8 h-8 text-cyan-500 mr-4' />
              <h3 className='text-2xl font-bold'>Our Mission</h3>
            </div>
            <p className='text-lg'>
              At <span className='font-bold text-cyan-500'>JobTrail</span>, our
              mission is to help job seekers stay organized and never miss an
              opportunity. We provide tools to track job applications, manage
              email communications, and monitor your progress. Our goal is to
              make your job search process as smooth and efficient as possible.
            </p>
          </div>
          <div className='p-6 rounded-xl shadow-2xl border border-b-cyan-500'>
            <div className='flex items-center mb-4'>
              <Smile className='w-8 h-8 text-cyan-500 mr-4' />
              <h3 className='text-2xl font-bold'>Why Choose Us?</h3>
            </div>
            <p className='text-lg'>
              <span className='font-bold text-cyan-500'>JobTrail</span> is
              designed with the job seeker in mind. We understand the challenges
              of job hunting, and we aim to alleviate some of the stress by
              providing a platform that keeps all your application details in
              one place. With our intuitive interface and comprehensive
              features, you can focus on landing your dream job without worrying
              about missing important deadlines or communications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
