import React, { Component } from "react";
import axios from "axios";
import { Card, WingBlank } from "antd-mobile";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUserList } from "../../redux/userList.redux";

class Genius extends Component {

    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        
    }
    componentDidMount () {
        this.props.getUserList('genius');
    }

    handleClick (v) {
        this.props.history.push(`/chat/${ v._id }`)
    }
    render () {   
        return (
          <div>
            <WingBlank>
                {
                   this.props.data.map( (v) => {
                        return (
                            <Card key = { v._id} 
                            onClick = { () =>this.handleClick(v) }
                            >
                                <Card.Header
                                   title = { v.user }
                                   thumb ={ require(`../../statics/avatar/${v.img}.jpg`)}
                                   thumbStyle = { { width: "40px", height: "40px"}}
                                   extra={<span>{ v.title}</span>}
                                >
                                </Card.Header>
                                <Card.Body >
                                    { v.desc }
                                
                                </Card.Body>
                            </Card>
                        )
                    })
                }
              
            </WingBlank>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.userList.userList
    }
}
const mapDisaptchToProps = (dispatch) => {
    return bindActionCreators({ getUserList }, dispatch);
}
export default connect(mapStateToProps, mapDisaptchToProps)(Genius);