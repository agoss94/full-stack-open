import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      number: "040-1234567"
    },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setNewFilter] = useState('')

  const saveNumber = (e) => {
    e.preventDefault();
    if (persons.filter((p) => p.name === newName).length > 0) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }
    setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName("");
    setNewNumber("")
  };

  const personsToShow = filter.length === 0 ? persons : persons.filter(p => p.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1)

  return (
    <div>
      filter: <input value={filter} onChange={e => setNewFilter(e.target.value)}/>
      <h2>Phonebook</h2>
      <form>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" onClick={saveNumber}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map((person) => (
        <p key={person.name}>{person.name} {person.number}</p>
      ))}
    </div>
  );
};

export default App;
