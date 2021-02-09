import React, { useState, useEffect } from 'react';
import Clipboard from 'clipboard';
// import emoji from './emojiList.json';

function EmojiResult(props) {

  useEffect(() => {
    let clipboard = new Clipboard('.clipboard');
    return () => {
      clipboard.destroy();
    }
  }, [])

    return (
        <div>
          {
            props.filteredEmoji.map((e, i) => {
                return (
                  <div className='clipboard' key={i} data-clipboard-text={e.symbol}>
                    <span>{e.symbol}</span>{' '}
                    <span>{e.title}</span>{' '}
                    <hr />
                  </div>
                )
              }
            )
          }
        </div>
    )
}

export default EmojiResult
