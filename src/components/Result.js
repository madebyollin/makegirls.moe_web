import React, { Component } from 'react';
import './Result.css';
import ImageEncoder from '../utils/ImageEncoder';

class Result extends Component {

    constructor(props) {
        super(props || {});
        console.log("constructed result with props", props)
    }

    render() {
        var dataURL = this.props.dataURL;
        if (this.props.rawImage) {
            dataURL = ImageEncoder.encode(this.props.rawImage);
        }
        if (dataURL) {
            return (
                <div className="result">
                    {<img src={dataURL} alt="result" />}
                </div>
            );
        } else {
            return (
                <div className="result-loading">
                </div>
            );
        }
    }
}

export default Result;
