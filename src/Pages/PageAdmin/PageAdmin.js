import React from 'react'
import dashboard from '../../Assets/img/breadcrumb.png'
import garis from '../../Assets/img/garis.png'
import sort from '../../Assets/img/fi_sort.png'
import { Button, ButtonGroup, Col, Dropdown, DropdownButton, Row, Table,Container,Form,FormControl,Nav,Navbar } from 'react-bootstrap'
import './PageAdmin.css'
import UIMG from '../../Assets/img/U.png'
import rectangle62 from '../../Assets/img/Rectangle 62.png'
import fi_menu from '../../Assets/img/fi_menu.png'
import homeIMG from '../../Assets/img/Home.png'
import truckIMG from '../../Assets/img/Administrator.png'
import rectangleIMG from '../../Assets/img/Rectangle.png'

export const PageAdmin = () => {
  return (
<div>
<div className='Navbar'>
          <div className='nav'>
            <img src={rectangleIMG} id ='logo' alt='logo-home'/>
            <ul>
              <li><a href="Dashboard"><img src={homeIMG} alt='logo-home'/><p>Dashboard</p></a></li>
              <li><a href="ListCar"><img src={truckIMG} alt='logo-truck'/><p>Cars</p></a></li>
            </ul> 
          </div>
        </div>
<Navbar  id='nav' expand="lg">
    <img src={fi_menu} id='menu'></img>
    <img src={rectangle62}></img>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <img src={UIMG} alt='logo-home'/>
        <DropdownButton id="dropdown" title="Unis Badri">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </Container>
    </Navbar>
  <div className='dashboard'>
    <img src={dashboard}></img>
      <h3 id='judul'>Dashboard</h3>
      <img src={garis}></img><b>&ensp;&ensp;List Order</b><p></p>
      <Table id='table_car'>
            <thead>
                <tr id='th'>
                    <th>No<img src={sort}/></th>
                    <th>User Email<img src={sort}/></th>
                    <th>Car<img src={sort}/></th>
                    <th>Start Rent<img src={sort}/></th>
                    <th>Finish Rent<img src={sort}/></th>
                    <th>Price<img src={sort}/></th>
                    <th>Status<img src={sort}/></th>
                </tr>
            </thead>
            <tbody>
              <tr>
                  <td>No</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                  <td>No</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                  <td>No</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                  <td>No</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                  <td>No</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                  <td>No</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                  <td>No</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                  <td>No</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                  <td>No</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                  <td>No</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
              </tr>
            </tbody>
        </Table>

      <Row id='btndrop'>
      <Col>
      <DropdownButton title="10" id='button'>
        <Dropdown.Item href="#/action-1">10</Dropdown.Item>
        <Dropdown.Item href="#/action-2">9</Dropdown.Item>
        <Dropdown.Item href="#/action-3">8</Dropdown.Item>
        <Dropdown.Item href="#/action-1">7</Dropdown.Item>
        <Dropdown.Item href="#/action-2">6</Dropdown.Item>
        <Dropdown.Item href="#/action-3">5</Dropdown.Item>
        <Dropdown.Item href="#/action-3">4</Dropdown.Item>
        <Dropdown.Item href="#/action-1">3</Dropdown.Item>
        <Dropdown.Item href="#/action-2">2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">1</Dropdown.Item>
      </DropdownButton>
      </Col>
      <Col>
            <Dropdown as={ButtonGroup}>
              <DropdownButton title="1" id='button'>
                <Dropdown.Item href="#/action-1">10</Dropdown.Item>
                <Dropdown.Item href="#/action-2">9</Dropdown.Item>
                <Dropdown.Item href="#/action-3">8</Dropdown.Item>
                <Dropdown.Item href="#/action-3">7</Dropdown.Item>
                <Dropdown.Item href="#/action-3">6</Dropdown.Item>
                <Dropdown.Item href="#/action-3">5</Dropdown.Item>
                <Dropdown.Item href="#/action-3">4</Dropdown.Item>
                <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                <Dropdown.Item href="#/action-3">2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">1</Dropdown.Item>
              </DropdownButton>
              <Button>Go</Button>
            </Dropdown>
      </Col>
      </Row>


      <img src={garis}></img><b>&ensp;&ensp;List Car</b><p></p>
      <Table id='table_car'>
            <thead>
                <tr id='th'>
                    <th>No<img src={sort}/></th>
                    <th>User Email<img src={sort}/></th>
                    <th>Car<img src={sort}/></th>
                    <th>Start Rent<img src={sort}/></th>
                    <th>Finish Rent<img src={sort}/></th>
                    <th>Price<img src={sort}/></th>
                    <th>Status<img src={sort}/></th>
                </tr>
            </thead>
            <tbody>
              <tr>
                  <td>No</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                  <td>No</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                  <td>No</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                  <td>No</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                  <td>No</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                  <td>No</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                  <td>No</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                  <td>No</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                  <td>No</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                  <td>No</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
              </tr>
            </tbody>
        </Table>

        <Row id='btndrop'>
      <Col>
      <DropdownButton title="10" id='button'>
        <Dropdown.Item href="#/action-1">10</Dropdown.Item>
        <Dropdown.Item href="#/action-2">9</Dropdown.Item>
        <Dropdown.Item href="#/action-3">8</Dropdown.Item>
        <Dropdown.Item href="#/action-1">7</Dropdown.Item>
        <Dropdown.Item href="#/action-2">6</Dropdown.Item>
        <Dropdown.Item href="#/action-3">5</Dropdown.Item>
        <Dropdown.Item href="#/action-3">4</Dropdown.Item>
        <Dropdown.Item href="#/action-1">3</Dropdown.Item>
        <Dropdown.Item href="#/action-2">2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">1</Dropdown.Item>
      </DropdownButton>
      </Col>
      <Col>
            <Dropdown as={ButtonGroup}>
              <DropdownButton title="1" id='button'>
                <Dropdown.Item href="#/action-1">10</Dropdown.Item>
                <Dropdown.Item href="#/action-2">9</Dropdown.Item>
                <Dropdown.Item href="#/action-3">8</Dropdown.Item>
                <Dropdown.Item href="#/action-3">7</Dropdown.Item>
                <Dropdown.Item href="#/action-3">6</Dropdown.Item>
                <Dropdown.Item href="#/action-3">5</Dropdown.Item>
                <Dropdown.Item href="#/action-3">4</Dropdown.Item>
                <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                <Dropdown.Item href="#/action-3">2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">1</Dropdown.Item>
              </DropdownButton>
              <Button>Go</Button>
            </Dropdown>
      </Col>
      </Row>
    </div>
</div>
  )
}