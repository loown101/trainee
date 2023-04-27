import './App.css';
import { Listing } from '../Listing/listing'
import { data } from '../../etsy.js'
import { useState } from 'react';


function App() {
  const [state, setState] = useState(data);

  return (
    <div className="item-list">
      {state?.map((item, index) => {
        if (!item.error_messages) {
          return <Listing key={index} items={item} />;
        }
      })}
    </div>
  );
}

export default App;
