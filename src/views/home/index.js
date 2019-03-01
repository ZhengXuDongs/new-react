import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';


class Home extends Component{

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
    this.props.history.push({pathname: '/user/user-center', state: {id:2, name: '战二'}});
  };


  render() {
    const {id, name} = this.state;
    return <div>
      <h1>我是Home页面</h1>
      <button onClick={this.jumpToHome.bind()}>跳转</button>
      <p>{id}</p>
      <p>{name}</p>
    </div>
  }

}

export default (withRouter(Home));
