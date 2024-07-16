import { login } from '@/action/user';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { IconBrandGithub } from '@tabler/icons-react';
import { signIn } from '@/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/getSession';

const Login = async () => {
  const session = await getSession();
  const user = session?.user;
  if (user) redirect('/dashboard');

  return (
    <div className='m-24 max-w-screen-sm mx-auto bg-gradient-to-t from-cyan-500 to-zinc-600 rounded-2xl p-8 shadow-lg'>
      <form className='my-8' action={login}>
        <Label htmlFor='email'>Email Address</Label>
        <Input id='email' placeholder='me@email.me' type='email' name='email' />

        <Label htmlFor='email'>Password</Label>
        <Input
          id='password'
          placeholder='***********'
          type='password'
          name='password'
          className='mb-6'
        />

        <button className='bg-gradient-to-br relative group/bt w-full rounded-md h-10 font-medium'>
          Login &rarr;
        </button>

        <p className='text-right text-sm max-w-sm mt-4 '>
          Don&apos;t have an account?{' '}
          <Link href='/signup'>
            <span className='font-bold'>Register</span>
          </Link>
        </p>

        <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />
      </form>
      <form
        action={async () => {
          'use server';
          await signIn('github');
        }}
      >
        <button
          className='text-center relative flex space-x-2 items-center justify-center px-4 w-full border rounded-xl'
          type='submit'
        >
          <IconBrandGithub className='h-6 w-6 text-center' />
          <span className='text-center text-sm'>Sign in with Github</span>
        </button>
      </form>
    </div>
  );
};

export default Login;
