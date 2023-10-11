import styled from "@emotion/styled";
import banner from "./perfil-bg.png";
import avatar from "./avatar.png";
import { Col, Container, Row } from "react-grid-system";
import { Card } from "../../componentes/Card/Card";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { CampoTexto } from "../../componentes/CampoTexto/CampoTexto";
import { Botao } from "../../componentes/Botao/Botao";
import { useEffect } from "react";
import http from "../../http";


const BannerEstilizado = styled.h1`
    background: url(${banner}) no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 246px;
    background-position: center;
    margin-top: 0;
    font-size: 40px;
    font-weight: 600;
    color: ${props => props.theme.cores.neutras.a};
`

const ImagemEstilizada = styled.img`
    max-width: 100%;
    margin: 0 auto;
`


const Perfil = () => {

    // quando a página for carregada, uma requisição será feita a API, trazendo as informações de perfil do usuário. 
    useEffect(() => {
        http.get('profile')
        .then(response => console.log(response.data))
        .catch(error => console.error(error))
    }, [])

    const aoSubmeterForm = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <BannerEstilizado>
                Meu perfil
            </BannerEstilizado>
            <Container>
                <form onSubmit={aoSubmeterForm}>
                    <Row>
                        <Col sm={12} md={5}>
                            <Card>
                                <div style={{ textAlign: "center" }}>
                                    <Tipografia variante="h2" componente="h2">
                                        João Marques da Silva
                                    </Tipografia>
                                    <ImagemEstilizada src={avatar} alt="avatar" />
                                </div>
                            </Card>
                        </Col>
                        <Col sm={12} md={7}>
                            <Tipografia variante="h3" componente="h3">
                                Revise seus dados
                            </Tipografia>
                            <CampoTexto titulo="Nome" tipo="text" />
                            <CampoTexto titulo="Sobrenome" tipo="text" />
                            <Row>
                                <Col sm={12} md={6}>
                                    <CampoTexto titulo="Celular" />
                                    <CampoTexto titulo="Código postal" />
                                </Col>
                                <Col sm={12} md={6}>
                                    <CampoTexto titulo="Email" />
                                    <CampoTexto titulo="País" />
                                </Col>
                                <Col sm={12} md={6}>
                                    <Botao fluido>
                                        Salvar
                                    </Botao>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </form>
            </Container >
        </>
    )
}

export default Perfil;