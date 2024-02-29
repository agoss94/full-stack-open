const Filter = ({ value, onChange }) => {
  return (
    <>
      filter: <input value={value} onChange={onChange} />
    </>
  );
};

export default Filter;
