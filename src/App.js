import './App.css';

function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen' style={{position: 'relative', bottom: '180px'}}>
      <div className='text-6xl font-bold mb-6'>
        Kidspedia
      </div>
      <p className='mt-3 text-2xl'>Simplify complex concepts for kids</p>
      <div className='max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <form className='w-full'>
          <div className="mb-6">
            <input type="text" id="keyword" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Search for things you want to know" required />
          </div>
          <div className='flex flex-col items-center justify-start'>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
