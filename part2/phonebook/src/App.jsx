import { useState, useEffect } from "react";
import service from "./services/service";

const Filter = ({ value, onChange }) => {
  return (
    <>
      filter: <input value={value} onChange={onChange} />
    </>
  );
};

const PersonForm = ({
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  onSubmit,
}) => {
  return (
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
        <button type="submit" onClick={onSubmit}>
          add
        </button>
      </div>
    </form>
  );
};

const Persons = ({ persons, deleteById }) => {
  return (
    <>
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
          <button onClick={() => deleteById(person.id, person.name)}>
            delete
          </button>
        </p>
      ))}
    </>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setNewFilter] = useState("");
  useEffect(() => {
    service.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const saveNumber = (e) => {
    e.preventDefault();
    const personInContactList = persons.find((p) => p.name === newName);
    if (personInContactList) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        const changedPerson = { ...personInContactList, number: newNumber };
        service.update(changedPerson).then((returnedPerson) => {
          setPersons(
            persons.map((p) => (p.id === changedPerson.id ? changedPerson : p))
          );
        });
      }
    } else {
      service
        .create({ name: newName, number: newNumber })
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
        });
    }
    setNewName("");
    setNewNumber("");
  };

  const deleteById = (id, contact) => {
    if (window.confirm(`Do you really want to delete the contact ${contact}`)) {
      service.remove(id);
      setPersons(persons.filter((p) => p.id !== id));
    }
  };

  const personsToShow =
    filter.length === 0
      ? persons
      : persons.filter(
          (p) => p.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={(e) => setNewFilter(e.target.value)} />
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        onSubmit={saveNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} deleteById={deleteById} />
    </div>
  );
};

export default App;
