import React from 'react'
import User from './User'
import Header from './Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import gift from '../assets/plan.png'




const Plans = () => {
    return (
        <>
            <Header />
            <div style={{paddingTop:'100px'}} className="row d-flex justify-content-evenly align-items-center">
                <div className="col-lg-3">
                    <User />
                </div>
                <div className="col-lg-9 d-flex flex-column justify-content-center">
                    <h5>PLAN DETAILS</h5>
                    <Card style={{ width: '18rem' }}>
                        <Card.Title className='text-center'>CURRENT PLAN</Card.Title>
                        <Card.Img variant="top" className='d-flex justify-content-center align-items-center' style={{ width: '150px',height:'200px' }} src={gift} />
                        <Card.Body>
                            <Card.Text>
                                <p className='text-center'>Plan name: Standard</p>
                                <p className='text-center'>Validity: 6 Months</p>
                                <p className='text-center'>Valid till 24 June 2024</p>
                            </Card.Text>
                            <Button className=' d-flex justify-content-center' variant="primary">UPGRADE NOW</Button>
                        </Card.Body>
                    </Card>
                    <div>
                    <h5>All invoice</h5>
                </div>
                </div>
            </div>
        </>
    )
}

export default Plans