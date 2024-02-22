import React from 'react';
import { Table, Button } from 'react-bootstrap';

export default function OthersBook() {
    return (
        <div>
            <div className="container dealavailable mb-3">
               
                    <h4 className="text-center" >Available Books of Others Category</h4>
                    <br />
                    </div>
        <Table hover bordered>
            <thead>
                <tr>
                    <th>Book Id</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Publisher</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">BK01</th>
                    <td>Mahagatha: 100 Tales from the Puranas </td>
                    <td>Satyarth Nayak</td>
                    <td>HarperCollins India</td>
                    <td>
                            <input type="checkbox" />
                        </td>
                    
                </tr>
                <tr>
              <th scope="row">BK02</th>
              <td>Kaliyuga</td>
              <td>Harsheth Chauhan</td>
              <td>NU VOICE PRESS </td>
              <td>
                            <input type="checkbox" />
                        </td>
            </tr>
            

            <tr>
              <th scope="row">BK03</th>
              <td>Kashi: Secret Of The Black Temple</td>
              <td>Vineet Bajpai</td>
              <td>TreeShade Books </td>
              <td>
                            <input type="checkbox" />
                        </td>
              </tr>
              

            </tbody>
        </Table>
        <br />
        <div className="d-flex justify-content-center">
        <Button variant="primary" type="submit">
        Confirm Request
    </Button>
    </div>
    <br />
    <br />
    </div>
    );
}
