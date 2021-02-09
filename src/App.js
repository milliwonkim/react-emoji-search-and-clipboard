import React, { useState, useEffect } from 'react';
import EmojiResult from './EmojiResult';
import Clipboard from 'clipboard';
import './App.css';

import emoji from './emojiList.json';
import SearchInput from './SearchInput';

function App() {

  // useEffect(() => {

  //   let clipboard = new Clipboard('.copy-to-clipboard');

  //   return () => {
  //     clipboard.destroy();
  //   }
  // }, [])

  const [searchValue, setSearchValue] = useState('');

  const filteredEmoji = emoji.filter(l => {

    if((l.title.toLowerCase().includes(searchValue.toLowerCase()) || l.keywords.includes(searchValue))) {
      return true;
    }

    return false;

  });

  return (
    <div className="App">
      <SearchInput setSearchValue={setSearchValue} />
      <EmojiResult filteredEmoji={filteredEmoji} />
    </div>
  );
  }


export default App;