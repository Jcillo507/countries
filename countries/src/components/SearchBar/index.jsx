import React from "react";

class SearchBar extends React.Component {
  state = {
    countries: [],
    searched: []
  };

  filterList = event => {
    let items = this.state.countries;
    items = items.filter(item => {
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ searched: items });
  };

  componentDidMount = () => {
    this.setState({
      countries: this.props.content,
      searched: this.props.content
    });
    console.log(this.props);
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Search for a Country"
            onChange={this.filterList}
          />
        </form>
        <div>
          {this.state.searched.map(item => {
            return <div key={item}>{item}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default SearchBar