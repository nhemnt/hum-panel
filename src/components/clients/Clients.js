import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Clients extends Component { 
    render() { 
        const clients = [{
            id: '123456778',
            firstName: 'Hemant',
            lastName: 'Negi',
            email: 'hemant@gmail.com',
            phone:8811231231,
            balance: 200.099
        },
        {
            id: '121242778',
            firstName: 'Hitesh',
            lastName: 'Bisht',
            email: 'hitesh@gmail.com',
            phone:88132423231,
            balance: 400.29
            },
            {
                id: '0123456778',
                firstName: 'Virender',
                lastName: 'Mehta',
                email: 'Virender@gmail.com',
                phone:88112009331,
                balance: 700.43
            }]
        if (clients) {
            return (
                <div className="row">
                    <div className="col-md-6">
                        <h2>
                            {' '}
                            <i className="fas fa-users" /> clients{' '}
                        </h2>
                    </div>
                    <div className="col-md-6"></div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Balance</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map(client => { 
                                return (
                                    <tr key={client.id}>
                                        <td>{client.firstName} {client.lastName}</td>
                                        <td>{client.email}</td>
                                        <td>₹{parseFloat(client.balance).toFixed(2)}</td>
                                        <td>
                                            <Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm">
                                                <i className="fas fa-arrow-circle-right" />Details
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            )   
        } else { 
            return(
                <h1>Loading ...</h1>
            )
        }
    }
}

export default Clients;