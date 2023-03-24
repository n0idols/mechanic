export default function Paper({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-xl bg-white mx-auto rounded-xl shadow-xl">
      {children}
    </div>
  );
}
