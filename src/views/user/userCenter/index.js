import React, {Component} from 'react';


class UserCenter extends Component{
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
    this.props.history.push({pathname: '/user/user-list'},{state: {id:2, name: '战二'}})
  };

  render() {
    const {id, name} = this.state;
    return <div>
      <h1>我是UserCenter页面</h1>
      <button onClick={this.jumpToHome.bind()}>跳转</button>
    </div>
  }

}

export default UserCenter;
