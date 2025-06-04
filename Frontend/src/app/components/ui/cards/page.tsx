const Cards = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <div key={num} className="bg-white rounded-lg shadow p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Card Title {num}</h3>
          <p className="text-gray-600">This is a simple card description to illustrate the layout.</p>
        </div>
      ))}
    </section>
  );
}

export default Cards;