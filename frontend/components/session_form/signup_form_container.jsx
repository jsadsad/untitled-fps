import { connect } from 'react-redux'
import { signUp } from '../../actions/session_actions'
import SessionForm from './session_form'

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors,
        formType: 'signup',
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signUp(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)