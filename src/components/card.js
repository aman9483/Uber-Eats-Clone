import React from 'react';
import Card from 'react-bootstrap/Card';

import './style.css';

const CardComponent = () => {
  return (
    <div className='container'>
      <Card style={{ width: '18rem' }}>
        <Card.Body>

            <div className='imag1'>
        
           
              <Card.Img  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/88d55f7112efe55f.webp" id="image" />
              <h1 id='h1'>Feed Your employees</h1>
              <a href='/'id='a1'>Create a business account</a>
          

            </div>

            <div className='img2'>
           
              <Card.Img  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/711d51ca1b458931.webp" id="image2" />

              <h1 id='h2'>Your resturent ,  delivered</h1>

              <a href='/' id='a2'>Add Your resturent</a>

              </div>
           
              <div className='img3'>
           
           <Card.Img  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/16522a701585873b.webp" id="image3" />

           <h1 id='h3'>Devliver with Uber Eats</h1>

           <a href='/' id='a3'>Signup to deliver</a>

           </div>
         
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
