import { useState } from "react";

const Filter = ({value, onChange}) => {
  return (
    <>
      filter: <input value={value} onChange={onChange}/>
    </>
  )
}

const PersonForm = ({newName, setNewName, newNumber, setNewNumber, onSubmit}) => {
  return (<form>
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
          <button type="submit" onClick={onSubmit}>
            add
          </button>
        </div>
      </form>)
}

const Persons = ({person}) => {
  return (
    <>
      {person.map((person) => (
        <p key={person.name}>{person.name} {person.number}</p>
      ))}
    </>
  )
}

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
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={e => setNewFilter(e.target.value)}/>
      <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} onSubmit={saveNumber}/>
      <h2>Numbers</h2>
      <Persons person={personsToShow}/>
    </div>
  );
};

export default App;
