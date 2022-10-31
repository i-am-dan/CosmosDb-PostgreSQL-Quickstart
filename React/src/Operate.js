import React, { useState } from 'react';
import {Button, Checkbox, Icon, Table} from 'semantic-ui-react';
import axios from 'axios';

const Operate = () => {
 
     //create a state to store the jokes from the api
    const [pharmacies, setPharmacies] = useState([]); //make sure you to import useState from react

    //store the api in a variable
    const apiLink = "https://localhost:3000";
    //create a function to fetch the data
    const fetchData = async () => {
        const res = await axios.get(`${apiLink}/`, { headers: { Accept: "application/json", "Access-Control-Allow-Origin": "*" } });
        setPharmacies(res.data);
    }

    const createData = async () => {
        await axios.post(`${apiLink}/`, { headers: { Accept: "application/json", "Access-Control-Allow-Origin": "*" } });
    }

    const dropTable = async () => {
        await axios.post(`${apiLink}/drop`, { headers: { Accept: "application/json", "Access-Control-Allow-Origin": "*" } });
    }

    return (
        <div>
            <h1>Fetch From Database:</h1>
            {/*Fetch data from url*/}
            <Button size='small' onClick={createData}>Reset</Button>
            <Button size='small' onClick={fetchData}>Load</Button>

            {/*data from api goes here*/}
            <Table celled compact definition>
                <Table.Header fullWidth>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>City</Table.HeaderCell>
                    <Table.HeaderCell>State</Table.HeaderCell>
                    <Table.HeaderCell>Zip</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                {
                    pharmacies.map((data) => (
                        <Table.Row>
                            <Table.Cell collapsing>
                                <Checkbox slider />
                            </Table.Cell>
                            <Table.Cell>{data.pharmacy_id}</Table.Cell>
                            <Table.Cell>{data.pharmacy_name}</Table.Cell>
                            <Table.Cell>{data.city}</Table.Cell>
                            <Table.Cell>{data.state}</Table.Cell>
                            <Table.Cell>{data.zip_code}</Table.Cell>
                        </Table.Row>
                    ))
                }
                </Table.Body>

                <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell>
                    </Table.HeaderCell>
                    <Table.HeaderCell colSpan='5'>
                    <Button
                        floated='left'
                        icon
                        labelPosition='right'
                        primary
                        size='small'
                    >
                        <Icon name='user' /> Add Pharmacy
                    </Button>
                    <Button size='small' disabled>
                        Delete Selected
                    </Button>
                    <Button floated='right' size='small' color='red' onClick={dropTable}>
                        Delete All
                    </Button>
                    </Table.HeaderCell>
                </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    );
}

export default Operate;