import { Col, Container, Row } from "react-grid-system"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import { Link } from "react-router-dom"
import { Botao } from "../../componentes/Botao/Botao"
import LayoutBase from "../LayoutBase"
import styled from "@emotion/styled"
import erro404 from "./erro-404.png";
import { Card } from "../../componentes/Card/Card"

const ImagemEstilizada = styled.img`
    max-width: 100%;
`

const Pagina404 = () => {
    return (
        <LayoutBase>
            <Container>
                <Row justify="center">
                    <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12} style={{ marginTop: '48px' }}>
                        <Card>
                            <Tipografia variante="h1" componente="h1">
                                Ops... Página não encontrada :(
                            </Tipografia>
                            <figure>
                                <ImagemEstilizada src={erro404} alt="" />
                            </figure>
                            <div style={{textAlign: 'center'}}>
                                <Tipografia variante="body" componente="body">
                                    Não encontramos a página que você está buscando, mas temos muitas outras para você navegar!
                                </Tipografia>
                                <Link to='/cadastro'>
                                    <Botao variante="secundaria">
                                        Voltar para a home
                                    </Botao>
                                </Link>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </LayoutBase>
    )
}

export default Pagina404;