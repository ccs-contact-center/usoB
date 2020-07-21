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
                  Cuando el sonido B ocupa la posición final de la palabra, como
                  por ejemplo clu<b>b</b> y todas sus variantes motoclub,
                  videoclub.
                </li>
                <li className="mt-3">
                  Uso correcto de la b cuando después de las sílabas, tur (
                  <b>turb</b>ante, <b>turb</b>ulento).
                </li>
                <p className="mt-3">
                  ¿Sabrías ya distinguir a partir de ahora las palabras que se
                  escriben con b y no con v?.
                </p>
              </ul>
              <h3 className="text-center">
                <b>REALIZAREMOS UNA ACTIVIDAD</b>
              </h3>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
