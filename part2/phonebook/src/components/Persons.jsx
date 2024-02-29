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

export default Persons;
