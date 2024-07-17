import React from 'react';

const Card = () => {
  return (
    <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px"}} >
      <img src="https://images.unsplash.com/photo-1581009135791-8f72f52e4aa8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="Sushi in the plate" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some card's content.</p>
        <div className='container w-100'>
          <select className="m-2 h-100 bg-success rounded">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}> {i + 1} </option>
              );
            })}
          </select>
          <select className="m-2 h-100 bg-success rounded">
            <option value="Half"> Half </option>
            <option value="Full">Full</option>
          </select>
          <div className="d-inline h-100 fs-5">
            Total Price
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
