import React from 'react';
import {connect} from 'react-redux';
import { setList } from '../redux/actions';

class Users extends React.Component {
    render() {
        return (
            <div>
                <p>Users</p>
                <p>{JSON.stringify(this.props.list || '{}')}</p>
            </div>    
        )
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.setList({a: 1, b: 2}) // Later we will have api call here
        }, 2000)
    }
}
const mapStateToProps = ({list}) => ({list})
const mapDispatchToProps = (dispatch) => {
    return {
        setList: (data) => dispatch(setList(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)
// export default Users
