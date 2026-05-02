import React from 'react'

const highlight = (text, query) => {
  const keywords = query.trim().split(/\s+/).filter(Boolean);
  if (!keywords.length) return [{ str: text, match: false }];

  const regex = new RegExp(`(${keywords.join("|")})`, "gi");

  return text.split(regex).map((str) => ({
    str,
    match: regex.test(str),
  }));
};

const SearchItem = ({ imgUrl, query, title }) => {
  const parts = highlight(title, query);

  return (
    <div className="search-item">
      <img src={imgUrl} alt="item" width="60px" height="60px" />
      <p>
        {parts.map(({ str, match }, i) =>
          match ? <mark key={i}>{str}</mark> : str
        )}
      </p>
    </div>
  );
};

export default SearchItem
