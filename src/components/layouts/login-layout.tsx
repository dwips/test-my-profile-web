function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-white p-4">
      <h1 className="font-bold text-3xl sm:text-5xl">Welcome to myApp</h1>
      <hr className="h-[5px] w-[100px] bg-black rounded-2xl" />
      <div className="max-w-[100%] w-[400px]">{children}</div>
    </div>
  );
}

export default LoginLayout;
