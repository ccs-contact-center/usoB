import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> Uso de correcto de la B</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12">
              <ul>
                <li>
                  Las palabras que contienen biblio (libro), fobia (temor,
                  miedo), bio (vida), por ejemplo bibliografía, biblioteca.
                  agorafobia, claustrofobia, biología, biosanitario.
                </li>
                <li className="mt-3">
                  Compuestos y derivados de palabras que ya se escriben con b,
                  por ejemplo de brazo – <b>b</b>razalete de <b>b</b>alón – 
                  <b>b</b>aloncesto, <b>b</b>alonmano.
                </li>
                <li className="mt-3">
                  <b>Se escribe con b</b> cuando el sonido <b>B</b> precede a
                  una consonante por ejemplo o<b>b</b>stáculo, o<b>b</b>jeto.
                </li>
              </ul>
              <ul className="centrado-fila">
                <li>
                  <span className="pRojo"> Ojo!</span>Hay una excepción: o
                  <b>b</b>ni.
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
