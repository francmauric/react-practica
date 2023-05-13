import PropTypes from 'prop-types'

export function Button({text, capi="usuario"}) {
    console.log(text, capi)
    return <button onClick={function (){
        console.log('Hola mundo')
    }}>
        {text} - {capi}
    </button>

}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    name: 'Some User'
}