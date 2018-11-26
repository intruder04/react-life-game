import React from 'react';
import { ButtonToolbar, MenuItem, DropdownButton } from 'react-bootstrap';

export default class Buttons extends React.Component {

    handleSelect = (evt) => {
        this.props.gridSize(evt);
    }

    render() {
        return (
            <div className="center">
                <ButtonToolbar>
                    <button className="btn btn-default" onClick={this.props.playButton}>
                        Play
                    </button>
                    <button className="btn btn-default" onClick={this.props.pauseButton}>
                        Pause
                    </button>
                    <button className="btn btn-default" onClick={this.props.clear}>
                        Clear
                    </button>
                    <button className="btn btn-default" onClick={this.props.slow}>
                        Slow
                    </button>
                    <button className="btn btn-default" onClick={this.props.fast}>
                        Fast
                    </button>
                    <button className="btn btn-default" onClick={this.props.seed}>
                        Populate
                    </button>
                    <DropdownButton
                        title="Grid Size"
                        id="size-menu"
                        onSelect={this.handleSelect}
                    >
                        <MenuItem eventKey="1">20 cols x 10 rows</MenuItem>
                        <MenuItem eventKey="2">50 cols x 30 rows</MenuItem>
                        <MenuItem eventKey="3">70 cols x 50 rows</MenuItem>
                    </DropdownButton>
                </ButtonToolbar>
            </div>
        )
    }
}