import React from 'react';
import { Table, Button } from 'react-bootstrap';

export default function UgPg() {
    return (
        <div>
            <div className="container dealavailable mb-3">
               
                    <h4 className="text-center" >Available Books of UG/PG</h4>
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
                    <td>Programming with Java</td>
                    <td>E Balagurusamy</td>
                    <td>Pearson</td>
                    <td>
                            <input type="checkbox" />
                        </td>
                    
                </tr>
                <tr>
              <th scope="row">BK02</th>
              <td>Programming World Wide Web</td>
              <td>Robertw. Sebesta</td>
              <td>Pearson </td>
              <td>
                            <input type="checkbox" />
                        </td>
            </tr>
            

            <tr>
              <th scope="row">BK03</th>
              <td>ASP.NET: The Complete Reference</td>
              <td>Matthew MacDonald</td>
              <td>Mc Graw Hill </td>
              <td>
                            <input type="checkbox" />
                        </td>
              </tr>
              

              <tr>
              <th scope="row">BK04</th>
              <td>C# 4.0 The Complete Reference</td>
              <td>Herbert Schildt</td>
              <td>Mc Graw Hill </td>
              <td>
                            <input type="checkbox" />
                        </td>
              </tr>
              
              <tr>
              <th scope="row">BK05</th>
              <td>HTML & CSS: The Complete Reference</td>
              <td>By Thomas A. Powell</td>
              <td>Mc Graw Hill </td>
              <td>
                            <input type="checkbox" />
                        </td>
              </tr>
              
              <tr>
              <th scope="row">BK06</th>
              <td>Object-Oriented Programming with C++</td>
              <td>E Balagurusamy</td>
              <td>Pearson </td>
              <td>
                            <input type="checkbox" />
                        </td>
              </tr>
              
              <tr>
              <th scope="row">BK07</th>
            <td>ARTIFICIAL INTELLIGENCE: A MODERN APPROACH</td>
            <td>Russell/Norvig y</td>
            <td>Pearson </td>
            <td>
                            <input type="checkbox" />
                        </td>
              </tr>
              
              <tr>
              <th scope="row">BK08</th>
            <td>The C Programming Language</td>
            <td> Dennis Ritchie</td>
            <td>Pearson </td>
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
