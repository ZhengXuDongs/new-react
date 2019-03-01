import React, {Component} from 'react';


class UserList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      name:'',
    }
  }

  componentWillMount() {
    console.log(this.props)
    if(this.props.location.state) {
      const param = this.props.location.state;
      this.setState({
        id: param.id,
        name: param.name
      })
    }
  }



  jumpToHome = () => {
    this.props.history.goBack();
  };

  render() {
    const {id, name} = this.state;
    return <div>
      <h1>我是UserList页面</h1>
      <button onClick={this.jumpToHome.bind()}>跳转</button>
    </div>
  }

}

export default UserList;
