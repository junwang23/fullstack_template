# Template for Full-Stack Projects

### with React + Material UI + D3 + Webpack + Flask

## Quick Start

Run ```$npm install ``` first to install all required packages. See ```package.json``` for the list. Then run the flask server with ```$python server/server.py```.

The demo page then can be visited at [http://localhost:5000](http://localhost:5000)

## Integrate React and D3

The ```barchart.jsx``` implements a barchart react component using d3 for visualization. The key technique here is to break the lifecycle of react automation by forcing the ```shouldComponentUpdate``` function return ```false```. Then, the ```render()``` function will only run once when initializing the component, creating the *svg* and groups (visualization containers).

The function ```update(nextProps)``` uses the *enter-update-exit* pattern of d3 selection to update the visualization. This function is invoked in both ```componentDidMount``` and ```componentWillReceiveProps``` to draw the bars when the data is firstly given and updated. The data array is passed as a property from the upper-level component.

A abstract view of the react + d3 component is as follows.

```javascript
export default class BarChart extends Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.update(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.update(nextProps);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        /* render visulization containders -- svg and groups */
    }

    update(nextProps) {
        /* update visualizationg with d3 selection and transition */
    }
}
```

### Warning

The function ```componentWillReceiveProps``` is marked as *UNSAFE* in current react [document](https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops) and may be deprecated in the future version.