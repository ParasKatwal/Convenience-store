import React from "react";
import { Container, Table, Button, Form } from "react-bootstrap";

function AdminPanel() {
    return (
        <div className="admin-panel">
            <Container>
                <div className="admin-panel__add">
                    <div className="form-wrapper">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter product name"
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Category</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter category name"
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="enter price"
                                />
                            </Form.Group>
                            <div className="input-group mt-4 mb-5">
                                <div className="input-group-prepend">
                                    <span
                                        className="input-group-text"
                                        id="inputGroupFileAddon01"
                                    >
                                        Upload
                                    </span>
                                </div>
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile01"
                                        aria-describedby="inputGroupFileAddon01"
                                    />
                                    <label
                                        className="custom-file-label"
                                        for="inputGroupFile01"
                                    >
                                        Choose Picture
                                    </label>
                                </div>
                            </div>
                            <div className="text-center">
                                <Button type="submit">ADD PRODUCT</Button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="admin-panel__table">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>S.N</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Rice</td>
                                <td>Rd 2000</td>
                                <td>
                                    <div className="action-wrap">
                                        <Button className="mr-4" variant="info">
                                            Edit
                                        </Button>
                                        <Button variant="danger">Delete</Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Rice</td>
                                <td>Rd 2000</td>
                                <td>
                                    <div className="action-wrap">
                                        <Button className="mr-4" variant="info">
                                            Edit
                                        </Button>
                                        <Button variant="danger">Delete</Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Rice</td>
                                <td>Rd 2000</td>
                                <td>
                                    <div className="action-wrap">
                                        <Button className="mr-4" variant="info">
                                            Edit
                                        </Button>
                                        <Button variant="danger">Delete</Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Rice</td>
                                <td>Rd 2000</td>
                                <td>
                                    <div className="action-wrap">
                                        <Button className="mr-4" variant="info">
                                            Edit
                                        </Button>
                                        <Button variant="danger">Delete</Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Rice</td>
                                <td>Rd 2000</td>
                                <td>
                                    <div className="action-wrap">
                                        <Button className="mr-4" variant="info">
                                            Edit
                                        </Button>
                                        <Button variant="danger">Delete</Button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
}

export default AdminPanel;
