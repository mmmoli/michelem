export const MainMessage = () => {
  return (
    <section data-testid="main-message">
      <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl font-heading">
        The world needs better tech.
      </h1>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Better software, interfaces, interactions.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Better conversations, goals and prospects.
      </p>
    </section>
  );
};
