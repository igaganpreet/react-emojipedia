import React from "react";
import Entry from "./Entry"
import emojipedia from "../emojipedia";  


function createEntry(emojiTerm){
  return <Entry emoji={emojiTerm.emoji} name={emojiTerm.name} meaning={emojiTerm.meaning} key={emojiTerm.id}/ >
}
function App() {
    return ( <div>
        <h1>
        <span> emojipedia < /span>
        </h1>
        <dl className = "dictionary" >
       {emojipedia.map(createEntry)}
        </dl> 
        </div >
    );
}

export default App;