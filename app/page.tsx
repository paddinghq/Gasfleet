import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div>
      <Button>I'm hungry</Button>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </div>
  );
};

export default Home;
