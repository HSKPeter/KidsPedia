function ResultCard({keyword, explanation}) {
  return (
    <div href="#" className="block w-9/12 xl:w-6/12 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"># {keyword}</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{explanation}</p>
    </div>

  );
}

export default ResultCard;
