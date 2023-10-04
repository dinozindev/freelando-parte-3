import { Col, Container, Row } from "react-grid-system";
import { Card } from "../../componentes/Card/Card";
import { Logo } from "./Logo";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { CampoTexto } from "../../componentes/CampoTexto/CampoTexto";
import { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import styled from "@emotion/styled";
import { Botao } from "../../componentes/Botao/Botao";
import {Link} from "../../componentes/Link/Link"

const FormEstilizado = styled.form`
    border-bottom: 1px solid;
    border-color: ${props => props.theme.cores.primarias.a};
    padding-bottom: ${props => props.theme.espacamentos.l};
`

const Login = () => {
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');

    const tentarEfetuarLogin = async (e) => {

    }

    return (
        <Container>
            <Row justify="center">
                <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12} style={{ margin: "80px 0" }}>
                    <div style={{ textAlign: 'center' }}>
                        <Logo />
                    </div>
                    <Card>
                        <div style={{ textAlign: 'center' }}>
                            <Tipografia componente="h1" variante="h1">
                                Efetuar Login
                            </Tipografia>
                        </div>
                        <FormEstilizado onSubmit={tentarEfetuarLogin}>
                            <CampoTexto
                                titulo="Email"
                                type="email"
                                valor={email}
                                onChange={setEmail}
                            />
                            <CampoTexto
                                titulo="Senha"
                                type="password"
                                valor={senha}
                                onChange={setSenha}
                            />
                            <div style={{ textAlign: 'right' }}>
                                <RouterLink to="">
                                    <Tipografia componente="legenda" variante="legenda">
                                        Esqueceu a senha?
                                    </Tipografia>
                                </RouterLink>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <Botao>
                                    Login
                                </Botao>
                            </div>
                        </FormEstilizado>
                        <div style={{ textAlign: 'center' }}>
                            <Tipografia componente="body2" variante="body2">
                                Ainda não criou sua conta no Freelando?
                            </Tipografia>
                            <Link variante="secundario">
                                <RouterLink to='/cadastro'>
                                    Cadastre-se clicando aqui!
                                </RouterLink>
                            </Link>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;