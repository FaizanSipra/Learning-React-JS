import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App


// hooks are special type of functions. Jo alag alag task ko krne ka kaam krty hain. Like
// 1. useState manages states such as we click a button to change a value from A to B
// 2. useRef: used to pick a DOM element
// 3. useEffect: cheezon ko side effect chlany ka kaam kiya.
// 4. useContext: global context ko manange krne ka kaam krta ha. Starting mein agr humein data section2 mein bhejna ha to wo section 1 mein bhi bhejna prta tha because section 1 section 2 se pehle/between betha hua tha. Iss liye hum data ko globally rkh den gy ta k hum kisi bhi section/component se data ko directly access kr sken.
// basic state manage krni ha to useState, global state manage krni ha to useContext and complex global state manage krni ha to useReducer(like kuch pages ki access bs logged in users ko hoti ha.)
// 5. useMemo: used for memorization. useMemo and useCallback ka kaam hota ha optimization.

// 1. useState: state ko manage krne k liye.
// 2. useEffect: side effects handle krne k liye(jaise API call, DOM manipulation, event listener)
// 3. useContext: global state ko consume karne k liye without props drilling.
// 4. useReducer: complex state management k liye(Redux jaisa chota version).
// 5. useRef: mutable values hold krne k liye jo re-render trigger na kren, ya DOM access krne k liye.
// 6. useMemo & useCallback: optimization k liye, unnecessary re-renders avoid krne k liye.