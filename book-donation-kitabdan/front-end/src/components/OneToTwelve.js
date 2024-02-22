import React from 'react';
import { Table, Button } from 'react-bootstrap';

export default function OneToTwelve() {
    return (
        <div>
            <div className="container dealavailable mb-3">
               
                    <h4 className="text-center" >Available Books of Class 1-12</h4>
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
                <th scope="row">OTTB01</th>
                    <td>Nootan Physics Class 12</td>
                    <td>Kumar Mittal</td>
                    <td>Nageen Prakashan</td>
                    <td>
                            <input type="checkbox" />
                        </td>
                    
                </tr>
                <tr>
              <th scope="row">OTTB02</th>
              <td>Nootan Chemistry Class 12</td>
              <td>Dr. H. C. Srivastava</td>
              <td>Pearson </td>
              <td>
                            <input type="checkbox" />
                        </td>
            </tr>
            

            <tr>
              <th scope="row">OTTB03</th>
              <td>Mathematics Class 11 & 12</td>
              <td>R. D. Sharma</td>
              <td>Dhanpat Rai Publications </td>
              <td>
                            <input type="checkbox" />
                        </td>
              </tr>
              

              <tr>
              <th scope="row">OTTB04</th>
              <td>ISC Mathematics Class 11 & 12</td>
              <td>O. P. Mehrotra</td>
              <td>S. Chand Publications </td>
              <td>
                            <input type="checkbox" />
                        </td>
              </tr>
              
              <tr>
              <th scope="row">OTTB05</th>
              <td>English Class 12</td>
              <td>S. P. Goel</td>
              <td>Sri Balaji Publications </td>
              <td>
                            <input type="checkbox" />
                        </td>
              </tr>
              
              <tr>
              <th scope="row">OTTB06</th>
              <td>Understanding ISC CS Book Class 12</td>
              <td>Vijay Kr. Pandey</td>
              <td>Arya Publishing Company </td>
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
