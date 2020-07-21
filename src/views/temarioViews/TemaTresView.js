import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Uso de correcto de la B</h3>
        </CardHeader>
        <CardBody>
          <Row className="centrado-fila">
            <Col xs="12">
              <ul>
                <li>
                  <b>Se escriben con b las palabras que terminan en</b>: -
                  <b>bilidad</b>, -<b>bundo</b>, -<b>bunda</b>, por ejemplo:
                  incomprensi<b>bilidad</b>, de<b>bilidad</b>, ab<b>undo</b>,
                  mori<b>bundo</b>, medita<b>bunda</b>.
                </li>
              </ul>
              <ul className="centrado-fila">
                <li>
                  <span className="pRojo">
                    <b>Ojo!</b> 
                  </span>
                  También hay dos excepciones como <b>movilidad</b> y{' '}
                  <b>civilidad</b>.
                </li>
              </ul>
              <ul>
                <li>
                  Las terminaciones del pretérito imperfecto de indicativo de la
                  primera conjugación del verbo <b>ir</b> como <b>iba</b>,{' '}
                  <b>íba</b>mos, canta<b>ba</b>, cantá<b>ba</b>mos.
                </li>
                <li>
                  Las formas verbales cuyos infinitivos acaban en -aber, -bir y
                  -buir, como por ejemplo: de saber – sa<b>b</b>emos de su
                  <b>b</b>ir – su<b>b</b>imos de contri<b>b</b>uir – contri
                  <b>b</b>uimos.
                </li>
              </ul>
              <ul className="centrado-fila">
                <li>
                  <span className="pRojo">
                    <b>Ojo! </b> 
                  </span>
                  Excepciones: Hervir, vivir, servir, precaver, por ejemplo
                  ser<b>v</b>ido, vi<b>v</b>ido.
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
