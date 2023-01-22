import { useState } from "react";
import ResultCard from "./components/ResultCard";
import Spinner from "./components/Spinner";

function App() {
  const [isSearching, setIsSearching] = useState(false);
  const [keywordInput, setKeywordInput] = useState("");
  const [explanation, setExplanation] = useState("");
  const [fixKeyword, setFixKeyword] = useState("");

  const handleClickOfSearchButton = async (e) => {
    setIsSearching(true);
    await connectBackend();
    setIsSearching(false);
    setFixKeyword(keywordInput);
  }

  const handleUserInputChange = (e) => {
    setKeywordInput(e.target.value);
  }

  async function connectBackend(){
    let response = await fetch("http://localhost:8080/api/search", {
      method: `POST`,
      body: JSON.stringify({keyword: keywordInput}),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    let input = await response.json();
    let text = input.text;
    setExplanation(text);
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen' style={{ position: 'relative', bottom: '180px' }}>
      <div className='text-6xl font-bold mb-6'>
        <span className="text-blue-600">Kids</span><span>pedia</span>
      </div>
      <p className='mt-3 text-2xl text-slate-500'>Simplify complex concepts for kids</p>
      <div className='max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <form className='w-full'>
          <div className="mb-6 flex flex-col items-center justify-center">
            <input
              type="text"
              id="keyword"
              className="w-9/12 xl:w-6/12 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Search for things you want to know"
              value={keywordInput}
              onInput={handleUserInputChange}
            />
          </div>
          <div className='flex flex-col items-center justify-start'>
            {isSearching
              ? <Spinner />
              :
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-slate-200 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                onClick={handleClickOfSearchButton}
              // disabled={keywordInput === ""}
              >
                Search
              </button>
            }
          </div>
        </form>
      </div>
      {
        !isSearching && explanation &&
        <ResultCard
          keyword={fixKeyword}
          explanation={explanation}
        />
      }
    </div>
  );
}

export default App;
