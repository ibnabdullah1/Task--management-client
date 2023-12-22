const Benefit = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-4">Who Can Benefit?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">Developers</h3>
          <p className="text-gray-700">
            Enhance your task management with easy-to-use features and
            collaboration tools.
          </p>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Corporate Professionals
          </h3>
          <p className="text-gray-700">
            Efficiently organize and manage tasks for better productivity in a
            corporate environment.
          </p>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">Bankers</h3>
          <p className="text-gray-700">
            Keep track of important deadlines and prioritize tasks in the
            fast-paced banking sector.
          </p>
        </div>

        {/* Add more categories as needed */}
      </div>
    </div>
  );
};

export default Benefit;
