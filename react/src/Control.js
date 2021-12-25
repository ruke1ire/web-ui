import './Control.css'
import ReactSlider from 'react-slider'
import {useState} from 'react'

function Control() {
  const [vals, setVals] = useState(0)
  return (
    <div className="Control">
      <h1>Control Panel</h1>
      <h3>This is a button</h3>
      <button onClick={() => {console.log("clicked button");}}>
          sup
      </button>
      <h3>This is a slider</h3>
      <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          values={vals}
          onChange={(vals) => { 
              setVals(vals);
              console.log("Slider Value =",vals);
          }} />
      <paragraph>Slider value : {vals}</paragraph>
    </div>
  );
}

export default Control;
