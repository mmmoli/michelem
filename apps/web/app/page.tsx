import { Button } from '@michelem/ui';
import { MainMessage } from './_components/';
import Link from 'next/link';

export default async function Index() {
  return (
    <div>
      <MainMessage />
      <Link href="/about" passHref>
        <Button variant="outline">Click me</Button>
      </Link>
    </div>
  );
}
