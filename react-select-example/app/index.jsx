import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.options = [
            {value: 'kar', label: 'kar'},
            {value: 'new', label: 'kar1'},
            {value: 'new2', label: 'kar2'}
        ];
    }

    logChange(val) {
        console.log(val.value);
    }

    render() {
        return <Select
            name="state-names"
            options={this.options}
            onChange={this.logChange}
        />;
    }
}

ReactDOM.render(<Application />, document.getElementById('app'));