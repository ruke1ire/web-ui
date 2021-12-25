import Plot from 'react-plotly.js';
import './Display.css'

function Display() {
    return (
        <div className="Display">
            <h1> Display Panel </h1>
            <h3> This is a plot. </h3>
            <Plot
                data={[
                  {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
                  },
                  {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ]}
                layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
              />
            <h3> This is an image. </h3>
            <img src='./trigboi.jpg' alt="SmallImg" width="200"/>;
        </div>
    );
}

export default Display;
