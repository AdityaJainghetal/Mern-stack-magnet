import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { message } from 'antd';

const InsertProduct = () => {
  const [input, setInput] = useState({});
  const [myimage, setMyimage] = useState();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleImage = (e) => {
    setMyimage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if an image has been selected
    if (!myimage) {
      alert('Please upload an image.');
      return;
    }

    // Prepare the form data for image upload
    const formData = new FormData();
    formData.append('file', myimage);
    formData.append('upload_preset', 'First_Preset'); // Your upload preset
    formData.append('cloud_name', 'dzbnmvkoz'); // Your cloud name

    try {
      // Upload the image to Cloudinary
      const imageResponse = await axios.post('https://api.cloudinary.com/v1_1/dzbnmvkoz/image/upload', formData);

      // After uploading the image, send the product data
      const productData = { ...input, image: imageResponse.data.url };

      // Send the product data to your API endpoint
      const api1 = 'http://localhost:9000/product/productsave';
      await axios.post(api1, productData);

      message.success('Product saved successfully!');

      setInput({
        name: '',
        description: '',
        product:'',
        price: '',
       
    });
    setMyimage({
      image:'',
    })
    } catch (error) {
      console.error('Error uploading image or saving product:', error);
      alert('There was an error. Please try again.');
    }
  };

  return (
    <>
      <center>
        <h5 style={{marginBottom:'30px'}}> Insert Product Page</h5>
        <Form style={{ width: '300px' }} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Product name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={input.name}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={input.description}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Label>Select Product</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="product"
            value={input.product}
            onChange={handleInput}
          >

            <option value="">Select a product</option> 
            <option value="laptop">Laptop</option>
            <option value="mobile">Mobile</option>
            <option value="computer">Computer</option>
            <option value="all">All</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Price</Form.Label>
            <Form.Control
              type="text"
              name="price"
              value={input.price}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control
              type="file"
              name="file"
              onChange={handleImage}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </center>
    </>
  );
};

export default InsertProduct;
