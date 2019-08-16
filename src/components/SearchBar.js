import React from 'react';

class SearchBar extends React.Component {
    state = { 'term' : '' };

    OnUpdateSearchTerm = (event) => {
        this.setState({ term : event.target.value });
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segement">
                <form className="ui form" onSubmit={ this.onSubmitForm }>
                    <div  className="ui search">
                      <div className="ui icon input fluid">
                        <input type="text" value={this.state.term}
                            onChange={ this.OnUpdateSearchTerm }
                        />
                        <i aria-hidden="true" className="search icon"></i>
                      </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
