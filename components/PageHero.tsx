interface Props {
  title: string;
  children?: React.ReactNode;
}

export default function PageHero({ title, children }: Props) {
  return (
    <div className="py-24 bg-gray-700">
      <h1 className="title text-white text-6xl font-bold text-center tracking-wide">
        {title}
      </h1>
      {children}
    </div>
  );
}
