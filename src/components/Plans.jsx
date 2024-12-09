import React, { useState } from 'react'
import User from './User'
import Header from './Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import gold from '../assets/gold.png'
import silver from '../assets/silver.png'
import bronze from '../assets/bronze.png'




const Plans = () => {
    const [selectMonthly,setSelectMonthly] = useState(true)
    console.log(selectMonthly);
    
    return (
        <>
            <Header />

            <div style={{ paddingTop: '100px' }} className="row d-flex justify-content-evenly align-items-center">
                <div className="col-lg-3">
                    <User />
                </div>
                <div className="col-lg-9 d-flex flex-column justify-content-center">
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <h1>Our Pricing plans</h1>
                        <div style={{ width: "300px" }} className='d-flex align-items-center justify-content-evenly'>
                            <h5>Annually</h5>
                            <div className="form-check form-switch m-3">
                                <input onChange={()=>{setSelectMonthly((prev)=>!prev)}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" for="flexSwitchCheckDefault"></label>
                            </div>
                            <h5>Monthly</h5>
                        </div>
                        <div>

                        </div>
                    </div>
                  <div className='d-flex align-items-center justify-content-evenly mt-5 mb-5 shadow pt-3 px-2 py-5' style={{lineHeight:'1px'}}>
                        <Card className='d-flex justify-content-center align-items-center pt-2 shadow' style={{height:"350px",width:'330px' }}>
                            <Card.Title className='text-center'>Essential</Card.Title>
                            <Card.Img className='img-fluid' variant="top" style={{ width: '140px', height: '150px' }} src={silver} />
                            <Card.Body className=' d-flex justify-content-center  align-items-center flex-column'>
                                <Card.Text>
                                    <h4 className='text-center'>Silver</h4>
                                    <hr />
                                    <p className='text-center'>For 6 months</p>
                                    <hr />
                                    <p className='text-center fw-bolder text-success' style={{fontSize:'30px'}}> <i className="fa-solid fa-indian-rupee-sign text-success ms-1" style={{fontSize:'30px'}}></i>{selectMonthly ? "699" : "4,194"}</p>
                                </Card.Text>
                                <Button className=' d-flex justify-content-center m-2' variant="primary">UPGRADE NOW</Button>
                            </Card.Body>
                        </Card>
                        <Card className='d-flex justify-content-center align-items-center pt-2 shadow' style={{height:"350px",width:'330px' }}>
                            <Card.Title className='text-center'>Future</Card.Title>
                            <Card.Img className='img-fluid' variant="top" style={{ width: '140px', height: '150px' }} src={gold} />
                            <Card.Body className=' d-flex justify-content-center  align-items-center flex-column'>
                                <Card.Text>
                                    <h4 className='text-center'>Gold</h4>
                                    <hr />
                                    <p className='text-center'>For 14 Months</p>
                                    <hr />
                                    <p className='text-center fw-bolder text-success' style={{fontSize:'30px'}}> <i className="fa-solid fa-indian-rupee-sign text-success ms-1" style={{fontSize:'30px'}}></i>{selectMonthly ? "1399" : "19,586"}</p>
                                </Card.Text>
                                <Button className=' d-flex justify-content-center m-2' variant="primary">UPGRADE NOW</Button>
                            </Card.Body>
                        </Card>
                        <Card className='d-flex justify-content-center align-items-center pt-2 shadow' style={{height:"350px",width:'330px' }}>
                            <Card.Title className='text-center'>Needed</Card.Title>
                            <Card.Img className='img-fluid' variant="top" style={{ width: '140px', height: '150px' }} src={bronze} />
                            <Card.Body className=' d-flex justify-content-center  align-items-center flex-column'>
                                <Card.Text>
                                    <h4 className='text-center'>Bronze</h4>
                                    <hr />
                                    <p className='text-center'>For 9 Months</p>
                                    <hr />
                                    <p className='text-center fw-bolder text-success' style={{fontSize:'30px'}}> <i className="fa-solid fa-indian-rupee-sign text-success ms-1" style={{fontSize:'30px'}}></i>{selectMonthly ? "999" : "8,991"}</p>
                                </Card.Text>
                                <Button className=' d-flex justify-content-center m-2' variant="primary">UPGRADE NOW</Button>
                            </Card.Body>
                        </Card>
                       
                  </div>
                </div>
            </div>

        </>
    )
}

export default Plans