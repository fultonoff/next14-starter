import Image from 'next/image'
import hreoImg from '../../public/hero.gif'
import brands from '../../public/brands.png'

const Home = () => {
  return (
    <div className='flex sm:items-center flex-col sm:flex-row'>
      <div className='flex-1'>
        <h1 className='font-bold text-2xl sm:text-3xl w-full md:text-5xl sm:max-w-sm mb-10'>Creative Throughts Agency</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <div className='mt-10 flex items-center gap-5'>
          <button className='px-4 py-2 rounded-sm text-white bg-btn'>Learn more</button>
          <button className='px-4 py-2 rounded-sm bg-white text-bg'>Contact</button>
        </div>

        <div>
          <Image src={brands} alt='brands' className='mt-10 grayscale-[20]'/>
        </div>

      </div>
        <div className='w-full sm:w-1/2'>
          <Image src={hreoImg} alt='' className='h-full w-full object-cover'/>
        </div>
      <div>

      </div>
    </div>
  );
};

export default Home;
