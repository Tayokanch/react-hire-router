function PeopleListItem(props) {
  const { person } = props;

  return (
    <li>
      <Link to={`/view/${person.id.value}`} state={{ person }}>
        <h3>
          {person.name.first} {person.name.last}
        </h3>
        {person.wage && <p>Wage: £{person.wage}</p>}
      </Link>
    </li>
  );
}

export default PeopleListItem;
