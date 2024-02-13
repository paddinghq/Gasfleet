import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div>
      <Button>Click me</Button>
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

// name: gasfleet-client checks

// on:
//   push:a
//     branches: [dev, pro]
//   pull_request:
//     branches: [dev, pro]

// jobs:
//   install:
//     runs-on: ubuntu-latest
//     steps:
//       - name: View context attributes
//         uses: actions/github-script@v6
//         with:
//           script: |
//             console.log(context);

//   prettier:
//     runs-on: ubuntu-latest
//     needs: install
//     steps:
//       - uses: actions/checkout@v3
//       - run: npm install
//       - run: npm run prettier:check

//   typescript:
//     runs-on: ubuntu-latest
//     needs: install
//     steps:
//       - uses: actions/checkout@v3
//       - run: npm install
//       - run: npm run typescript

//   build:
//     runs-on: ubuntu-latest
//     needs: install
//     env:
//       NEXT_PUBLIC_SANITY_PROJECT_ID: k68zk0vr
//       NEXT_PUBLIC_SANITY_DATASET: production
//     steps:
//       - uses: actions/checkout@v3
//       - run: npm install
//       - run: npm run build
