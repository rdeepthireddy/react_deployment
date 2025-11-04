const ListComp = () => {
  const students = [
    { id: 1, name: "John", grade: "A" },
    { id: 2, name: "Emma", grade: "B" },
    { id: 3, name: "Liam", grade: "A" },
    { id: 4, name: "Olivia", grade: "C" },
  ];

  return (
    <div>
      {students.map((element, index) => (
        <div key={index}>
          <p>student id is {element.id}</p>
          <p>student name is {element.name}</p>
          <p>student grade is {element.grade}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};
export default ListComp;
