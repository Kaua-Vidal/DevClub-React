import { Button } from './styles'
import PropTypes from 'prop-types'

function DefaultButton({ children , theme, ...props}) {
    //... = spread operator -> Pega todo o resto
    return (
        <Button {...props} theme={theme}>
            {children}
        </Button>
    )
}

DefaultButton.PropTypes = {
    children: PropTypes.node.isRequired,
    //Do tipo ReactNODE e é OBRIGATÓRIO
    theme: PropTypes.string
}

export default DefaultButton