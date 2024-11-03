import { Heading, Text } from '@/components/atom';

import { Todos } from './components/Todos';

export default function Home() {
  return (
    <div className="flex h-full w-full">
      <aside className="relative flex w-72 min-w-[210px] max-w-[420px] shrink-0 bg-grey-100">
        <div className="flex grow flex-wrap items-center justify-center">
          <Heading component="h3" variant="title-4" align="center">
            Sidebar Component
          </Heading>
        </div>
      </aside>
      <section className="relative z-[1] flex min-h-[380px] grow flex-col shadow-md">
        <header
          aria-label="Header Content"
          className="relative flex h-20 shrink-0 flex-col px-7"
        >
          <div className="flex w-full max-w-screen-lg grow self-center">
            <div className="flex shrink-0 grow items-center">
              <Heading component="h2" weight="bold">
                Today
              </Heading>
            </div>
            <div className="flex h-full items-center">avatar logout</div>
          </div>
        </header>
        <main
          aria-label="Main Content"
          className="relative flex shrink-0 flex-grow flex-col px-7"
        >
          <div className="flex w-full max-w-screen-lg grow flex-col self-center">
            <div className="mb-4 mt-6 flex w-full shrink-0 flex-col gap-1">
              <Heading component="h2" variant="title-4" weight="bold">
                Good Night, Agung
              </Heading>
              <Text size="small" className="text-office-brown-700">
                What do you want to achieve today? 🎯
              </Text>
            </div>
            <Todos />
          </div>
        </main>
      </section>
    </div>
  );
}
