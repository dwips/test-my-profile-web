function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-blue-100/50 p-4">
      <div className="flex flex-col gap-4 items-center p-6 w-full">
        <h1 className="font-bold text-3xl sm:text-5xl">Welcome to myApp</h1>
        <hr className="h-[5px] w-[100px] bg-black rounded-2xl" />
        <div className="max-w-[100%] w-[400px]">{children}</div>
      </div>
    </div>
  );
}

export default LoginLayout;
