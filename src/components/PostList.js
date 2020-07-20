import React from "react";
import { connect } from "react-redux";
import { fetchPostAndUser } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostAndUser()
    }

    renderList () {
        return this.props.post.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            )
        })
    }

    render() {
        return(
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { post : state.post }
}

export default connect(mapStateToProps, { fetchPostAndUser })(PostList);