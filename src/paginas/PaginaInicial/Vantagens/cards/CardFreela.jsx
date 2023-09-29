import { Col } from "react-grid-system";
import { Card } from "../../../../componentes/Card/Card";
import styled from "@emotion/styled";
import { Tipografia } from "../../../../componentes/Tipografia/Tipografia";

const StyledContent = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    color: ${props => props.theme.cores.primarias.c};
`

const CardFreela = ({ icone, texto }) => {
    return (
        <>
            <Col sm={12} md={12} lg={6} style={{marginBottom: '24px'}}>
                <Card comBorda={false} variante="secundaria">
                    <StyledContent>
                        {icone}
                        <Tipografia componente="body" variante="body">
                            {texto}
                        </Tipografia>
                    </StyledContent>
                </Card>
            </Col>
        </>
    )
}

export default CardFreela;