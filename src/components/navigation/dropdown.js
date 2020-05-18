import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignIn from '../auth/sign-in';
import SignUp from '../auth/sign-up';


class DropdownComponent extends Component {
    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <FontAwesomeIcon icon="bars" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/sign-in">
                        Sign In
                    </Dropdown.Item>
                    <Dropdown.Item href="/register">Register</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}

export default DropdownComponent;