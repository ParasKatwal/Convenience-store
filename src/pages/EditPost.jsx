import { connect } from "react-redux";
import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";

import { editItem } from "../api";
import { history } from "../history";
import sl from "../components/selector";

function EditPost(props) {
  const [itemName, setName] = useState();
  const [itemPrice, setPrice] = useState();
  const [itemCategory, setCategory] = useState();
  const [itemDescription, setDescription] = useState();

  const { name, _id, category, description, price } = staticSelector.select(
    props.location.state
  );

  const handleEditProduct = async () => {
    const editedData = {
      name: itemName || name,
      description: itemDescription || description,
      category: itemCategory || category,
      price: itemPrice || price,
    };

    console.log(editedData);
    await editItem(_id, editedData).then((res) => {
      if (res.data._id) {
        history.push("/adminPanel");
      }
    });
  };

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
                  defaultValue={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter category name"
                  defaultValue={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter description"
                  defaultValue={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter price"
                  defaultValue={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>

              <div className="text-center">
                <Button onClick={handleEditProduct}>EDIT PRODUCT</Button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}

const staticSelector = sl.object({
  _id: sl.string(""),
  description: sl.string(""),
  price: sl.number(),
  category: sl.string(""),
  name: sl.string(""),
});

export default EditPost;
