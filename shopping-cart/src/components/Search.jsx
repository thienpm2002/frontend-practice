import React, { useEffect, useState, useRef } from 'react'
import SearchItem from "./SearchItem"

const Search = () => {
  const [query, setQuery] = useState('');  
  const [results,  setResults] = useState([]);
  const [isShowResult, setIsShowResult] = useState(false);
  const [status, setStatus] = useState({init: false, loading: false, error: false});
 
  const isEmpty = results.length === 0 ? true : false;
  const boxRef = useRef(null);

  const handlerChange = (e) => {
    setQuery(e.target.value);
  }

  const handlerFocus = () => {
    setIsShowResult(true);
  }
  
  //Search product
  const fetchProducts = async (query, signal) => {
      try {
        const inputFormat =  query.trim().toLowerCase();
        const res = await fetch(`https://dummyjson.com/products/search?q=${inputFormat}`, {signal});
        if(!res.ok){
          throw new Error(`Error: ${res.status}`);  
        }
        const data = await res.json();
        const products = data.products.filter(item => inputFormat.split(" ").every(sub =>  item.title.trim().toLowerCase().includes(sub)))
        setResults(products);
        setStatus({init: false, loading: false, error: false});
      } catch (e) {
        if (e.name === "AbortError") {
          return;
        }
        setStatus({init: false, loading: false, error: true});
        setResults([]);
        console.log(e);
      }
  }

  useEffect(() => {
    if (!query){
      setResults([]);
      setStatus({init: true, loading: false, error: false});
      return; 
    } 

    setStatus({init: false, loading: true, error: false});
    setResults([]);

    const controller = new AbortController();
    const timer = setTimeout(() => {
      fetchProducts(query, controller.signal);
    }, 500)

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query])

  // search outside
  useEffect(() => {
    function handleClick(e) {
      if (!boxRef.current.contains(e.target)) {
        setIsShowResult(false);
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);


  return (
    <div ref={boxRef} className="search">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
       <input className="input-search" type="text" onChange={handlerChange} onFocus={handlerFocus} value={query}/>
       {isShowResult && 
         <div className='result-area'>
            {status.init && <p>Enter keyword for search</p> || status.loading && <p>Loading...</p> || status.error && <p>Failed to fetch results</p>} 
            {!isEmpty &&
              results.map(item => <SearchItem key={item.id} query={query} imgUrl={item.thumbnail} title={item.title}/>)
            }
          </div>
       }
    </div>
  )
}

export default Search
