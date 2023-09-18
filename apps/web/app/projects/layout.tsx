export const metadata = {
  title: 'About Me, Michele Memoli',
  description: 'Generated by create-nx-workspace',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="max-w-screen-md mx-auto">{children}</section>;
}
