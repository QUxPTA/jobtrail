import { register } from '@/action/user';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getSession } from '@/lib/getSession';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Register = ({ session }) => {
  const user = session?.user;
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  return (
    <div className='justify-center m-24 max-w-screen-sm mx-auto bg-gradient-to-t from-cyan-500 to-zinc-500 rounded-2xl p-8 shadow-lg'>
      <h2 className='font-bold text-xl'>Welcome to JobTrail</h2>
      <p className='text-sm max-w-sm mt-2'>
        Please fill in the following details
      </p>

      <form className='my-8' action={register}>
        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
          <div className='flex-grow'>
            <Label htmlFor='firstname' className='mb-2'>
              First Name
            </Label>
            <Input
              id='firstname'
              placeholder='DB'
              type='text'
              name='firstname'
            />
          </div>
          <div className='flex-grow'>
            <Label htmlFor='lastname' className='mb-2'>
              Last Name
            </Label>
            <Input
              id='lastname'
              placeholder='Cooper'
              type='text'
              name='lastname'
            />
          </div>
        </div>

        <Label htmlFor='email'>Email Address</Label>
        <Input id='email' placeholder='me@email.me' type='email' name='email' />

        <Label htmlFor='password'>Password</Label>
        <Input
          id='password'
          placeholder='***********'
          type='password'
          name='password'
          className='mb-5'
        />

        <button className='bg-gradient-to-br relative group/bt w-full rounded-md h-10 font-medium'>
          Sign up &rarr;
        </button>

        <p className='text-sm max-w-sm mt-2'>
          Already have an account?{' '}
          <Link href='/login'>
            <span className='font-bold'>Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context.req, context.res);
  return {
    props: {
      session,
    },
  };
};

export default Register;
