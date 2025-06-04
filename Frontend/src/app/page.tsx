import dropdowns from '@/data/dropdowns.json';

const HomePage = () => {
  return (
    <section className="max-w-5xl mx-auto min-h-screen px-4 py-12 text-center">
      <h1 className="text-4xl font-extrabold uppercase tracking-wide mb-12">
        Component Collection
      </h1>

      {Object.entries(dropdowns).map(([category, components]) => (
        <div key={category} className="mb-10 text-left">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">
            {category}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {components.map(({ label }) => (
              <li
                key={label}
                className="rounded-md bg-neutral-800 px-4 py-3 text-white cursor-default select-none"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="text-left">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">
          Other
        </h2>
        <div className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white font-semibold select-none cursor-default">
          Contact Form
        </div>
      </div>
    </section>
  );
};

export default HomePage;
