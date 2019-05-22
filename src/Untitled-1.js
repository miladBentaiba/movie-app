//parent component
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterYear:2000 }
  }
  getstatefromsearch=(year)=>
    this.setState({ filterYear:year}, console.log(this.state.year))

  render(){return (<Inputs getstatefromsearch={this.getstatefromsearch}/>);}
}

//child component
export default class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { year: 2000 };
  }
  sendNewMovie=() => this.props.getstatefromsearch(this.state.year)
  render() {
    return (<Input type="text" name="title" id="title" placeholder="Search by title"
        onChange={(event) => { this.filter(event) }} />);
  }
}