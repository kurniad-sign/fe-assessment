import { Button, Heading, Input, Text } from '@/components/atom';

export default function LoginPage() {
  return (
    <main className="flex h-screen flex-auto items-center justify-center bg-primary-50">
      <div className="min-w-[25rem] space-y-8 rounded-2xl bg-grey-50 shadow-md">
        <div className="flex flex-col p-8 pb-0">
          <Heading
            component="h1"
            variant="title-4"
            weight="bold"
            align="center"
            className="mb-2"
          >
            Log In
          </Heading>
          <Text size="small" align="center" className="text-office-brown-700">
            Enter your username to access your account
          </Text>
        </div>
        <div className="flex flex-col gap-6 px-8">
          <Input
            label="Username"
            type="text"
            placeholder="Enter your username"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="px-8 pb-8">
          <Button block color="primary">
            Login account
          </Button>
        </div>
      </div>
    </main>
  );
}
