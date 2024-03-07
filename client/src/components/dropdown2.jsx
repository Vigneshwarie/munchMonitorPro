import Dropdown from 'react-bootstrap/Dropdown';

function Dropdown2() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic">
        Pet Type
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Cat</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Dog</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Bird</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Turtle</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Hamster</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Other</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdown2;