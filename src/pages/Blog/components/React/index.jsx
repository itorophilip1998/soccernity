import React from 'react' 
import {reactions} from '../../../../DB';
function Reactions() {
  return (
    <div className="reactions shadow">
          {
              reactions.map((item, key) =>
                  <span ><img src={item.url} alt="" /> </span>
              )
      }
    </div>
  )
}

export default Reactions
