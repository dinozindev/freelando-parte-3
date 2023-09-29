import { Col, Container, Row } from "react-grid-system";
import { Tipografia } from "../../../componentes/Tipografia/Tipografia";
import { Botao } from "../../../componentes/Botao/Botao";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import BannerImg from "./pessoas.png"

const StyledImg = styled.img`
    max-width: 100%;
`

const StyledFigure = styled.figure`
    color: ${props => props.theme.cores.primarias.b};
    padding: ${props => props.theme.espacamentos.l};
    background: ${props => props.theme.cores.neutras.c};
    margin: 0;
`

const Banner = () => {
    return (
        <>
            <StyledFigure>
                <Container style={{margin: 0}}>
                    <Row align="center">
                        <Col md={5} sm={12}>
                            <figcaption>
                                <Tipografia variante="h1" componente="h1">
                                    Uma ponte entre os freelas mais talentosos e os projetos mais interessantes!
                                </Tipografia>
                            </figcaption>
                            <Link to="/cadastro">
                                <Botao>
                                    Quero me cadastrar!
                                </Botao>
                            </Link>
                        </Col>
                        <Col md={7} sm={12}>
                            <StyledImg src={BannerImg} alt="banner image"/>
                        </Col>
                    </Row>
                </Container>
            </StyledFigure>
        </>
    )
}

export default Banner;