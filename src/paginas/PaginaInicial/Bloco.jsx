import styled from "@emotion/styled";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { Row } from "react-grid-system";


const StyledContainer = styled.div`
    text-align: center;
    padding-top: ${props => props.theme.espacamentos.s};
`

const Bloco = ({titulo, children}) => {
    return (
        <StyledContainer>
            <Tipografia componente="h2" variante="h2">
                {titulo}
            </Tipografia>
            <Row>
                {children}
            </Row>
        </StyledContainer>
    )
}

export default Bloco;