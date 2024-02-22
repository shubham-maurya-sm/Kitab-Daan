import React from 'react';
import { Table, Button } from 'react-bootstrap';

export default function Competition() {
    return (
        <div>
            <div className="container dealavailable mb-3">
               
                    <h4 className="text-center" >Available Books of UPSC/SSC or Competition Books</h4>
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
                <th scope="row">CB01</th>
                    <td>Indian Polity</td>
                    <td>Mc Graw Hill</td>
                    <td>M Laxmikant</td>
                    <td>
                            <input type="checkbox" />
                        </td>
                    
                </tr>
                <tr>
              <th scope="row">CB02</th>
              <td>General Studies -2022 for UPSC, SSC</td>
              <td>B Singh | A. P. Singh</td>
              <td>MADE EASY Publications </td>
              <td>
                            <input type="checkbox" />
                        </td>
            </tr>
            

            <tr>
              <th scope="row">CB03</th>
              <td>Governance India</td>
              <td>Mc Graw Hill</td>
                <td>M Laxmikant</td>
              <td>
                            <input type="checkbox" />
                        </td>
              </tr>
              

              <tr>
              <th scope="row">CB04</th>
              <td>Indian Art and Culture</td>
              <td>Nitin Singhaniyat</td>
              <td>Mc Graw Hill </td>
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
