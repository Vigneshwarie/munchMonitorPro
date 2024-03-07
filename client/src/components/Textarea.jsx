import React from "react";

const TextareaPage = () => {
  return (
    <div className="form-group">
      <label htmlFor="exampleFormControlTextarea1"><strong>Notes:</strong></label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="5"
      />
    </div>
  );
};

export default TextareaPage;