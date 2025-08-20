import { useState } from "react";

function Colors() {
  const [color, setColor] = useState("#252719FF");
  return (
    <>
      <div style={{ backgroundColor: color }}>
        <label for="color" class="form-label">
          Color picker
        </label>
        <input
          type="color"
          class="form-control form-control-color"
          id="color"
          value={color}
          title="Choose your color"
          onChange={(e) => {
            setColor(e.target.value);
          }}
        ></input>

        <p>{color}</p>
      </div>
    </>
  );
}

export default Colors;
