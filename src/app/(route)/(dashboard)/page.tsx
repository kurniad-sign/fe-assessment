import { Heading, Text } from '@/components/atom';

import { Todos } from './components/Todos';

export default function Home() {
  return (
    <>
      <div className="mb-4 mt-6 flex w-full shrink-0 flex-col gap-1">
        <Heading component="h2" variant="title-4" weight="bold">
          Good Night, Agung
        </Heading>
        <Text size="small" className="text-office-brown-700">
          What do you want to achieve today? 🎯
        </Text>
      </div>
      <Todos />
    </>
  );
}
