import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> Uso de correcto de la B</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: '0px' }}
              >
                <b>Reglas ortográficas de la B</b>
              </h2>
            </Col>
            <Col xs="12" className="text-justify">
              <ul className="animated slideInUp delay-1 mt-3">
                <li>
                  Las palabras que comienzan con los prefijos: <b>sub</b>
                  - (significa debajo de), por ejemplo: 
                  <b>Sub</b>marino, <b>sub</b>titulo, <b>sub</b>director, 
                  <b>sub</b>cosciente.
                </li>
                <li className="mt-3">
                  <b>bi</b>-, <b>bis</b>-, <b>biz</b>- (significa dos), por
                  ejemplo: <b>bi</b>mensual, <b>bi</b>centenario, <b>biz</b>
                  quera.
                </li>
              </ul>
              <ul className="centrado-fila">
                <li className="mt-3 ">
                  <span className="pRojo">
                    <b>Ojo!</b>
                  </span>
                    La mayoria de las palabras que empiezan con viz- se escriben
                  con <b>V</b>, salvo las que significan dos, por ejemplo <b>viz</b>conde es
                  con uve.
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView
