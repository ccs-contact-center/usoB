import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Uso de correcto de la B</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12">
              <ul>
                <li>
                  Se escribe con b las palabras que empiezan por las sílabas 
                  <b>ha</b>-, <b>he</b>-, <b>hi</b>-, <b>hu</b>- seguidas del
                  sonido B por ejemplo:
                  <b>h</b>ablar, <b>h</b>abitar, <b>h</b>íbrido, <b>h</b>
                  ebillas.
                </li>
                <li>
                  Las palabras que empiezan por <b>bien</b>- o <b>bene</b>- por
                  ejemplo: <b>bien</b>aventurada, <b>bien</b>venido, <b>bene</b>
                  factor, <b>bene</b>ficiarle.
                </li>
                <li>
                  Las palabras que empiezan por las sílabas: <b>bu</b>-, 
                  <b>bur</b>- y <b>bus</b>-, por ejemplo: <b>Bu</b>eno, 
                  <b>bur</b>lar, <b>bur</b>ro, <b>bus</b>car.
                </li>
              </ul>

              <ul className="mt-3 centrado-fila">
                <li>
                  <span className="pRojo"><b>Ojo!</b></span> Todas las palabras que
                  empiezan por bu, bur, bus empiezan por b salvo <b>vudú</b> que
                  es con v.
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
