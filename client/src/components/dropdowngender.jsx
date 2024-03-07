import Dropdown from 'react-bootstrap/Dropdown';



function Dropdowngender() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic">
        Pet Gender
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
        <Dropdown.Item href="#/action-3">N/A</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdowngender;