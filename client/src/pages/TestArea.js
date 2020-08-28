import React, { useState } from "react";
import { Container } from "../components/Grid";
import API from "./utils/API"

const TestArea = () => {

  const [shapeType, setShapeType] = useState("");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [depth, setDepth] = useState(0);
  const [radius, setRadius] = useState(0);
  const [area, setArea] = useState(0)
  const [parameter, setParameter] = useState(0)

  useEffect(() => {
    API.getPost(props.match.params.id)
      .then(res => dispatch({ type: SET_CURRENT_POST, post: res.data }))
      .catch(err => console.log(err));
  }, ["test"]);

  const calculateSurfaceArea = () => {

  }

  const handleFormSubmit = event => {
    event.preventDefault();

  }

  return (
    <Container fluid>
      <div className="col-md-2">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label for="chooseYourShape">Choose your shape</label>
            <select multiple className="form-control" id="chooseYourShape"
              onChange={e => setShapeType(e.target.value)}
            >
              <option value="square">Square</option>
              <option value="circle">Circle</option>
              <option value="circle">Triangle</option>

            </select>
          </div>
          <div className="form-group">
            <label for="width">width</label>
            <input type="number" className="form-control" id="width"
              onChange={e => setWidth(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="height">height</label>
            <input type="number" className="form-control" id="height"
              onChange={e => setHeight(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="depth">depth</label>
            <input type="number" className="form-control" id="depth"
              onChange={e => setDepth(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="radius">radius</label>
            <input type="number" className="form-control" id="radius"
              onChange={e => setRadius(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="area">area</label>
            <input type="number" className="form-control" id="area"
              onChange={e => setArea(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="parameter">parameter</label>
            <input type="number" className="form-control" id="parameter"
              onChange={e => setParameter(e.target.value)}
            />
          </div>

          <button className="btn"
            onC>Post</button>

          <div className="form-group">
            <label for="output">results
            </label>
            <textarea className="form-control" id="output" rows="3"
            ></textarea>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default TestArea;