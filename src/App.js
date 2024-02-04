import './App.css';

import { useState } from 'react';
import PhoneBookForm from './components/PhoneBookForm';
import InformationTable from './components/InformationTable';
import DataList from './components/DataList';
import Counter from './components/Counter';
import Toggle from './components/Toggle';

function App() {
const [entries, setEntries] = useState([]);

const addEntryToPhoneBook = (entry) => {
  let orderedEntries = [...entries, entry].sort((a, b) => {  
    return a.lastName.localeCompare(b.lastName);
  });
  setEntries(orderedEntries);
};
  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable entries={entries} />
      <DataList />
      <Toggle />
      <Counter />
      
    </section>
  );
}

export default App;
