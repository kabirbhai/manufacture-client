// import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import useParts from "../../../../hooks/useParts";

// export const PurchaseContext = createContext("puchacess");

const Parts = () => {
  const [parts, setParts] = useParts([]);
  const navigate = useNavigate();

  //handlePurchases
  const handlePurchases = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <section>
      <div className="max-w-screen-2xl mx-auto py-24">
        <h1 className="text-center my-10 text-5xl text-indigo-900">
          Available parts
        </h1>
        {/* <PurchaseContext.Provider value="value"> */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 items-center gap-4">
          {parts.map((p) => (
            <div key={p._id}>
              <div className="part-container card   shadow-xl">
                <figure>
                  <img src={p.img} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="font-bold text-2xl">{p.name}</h2>
                  <p>Min order quantity: {p.min_quantity}</p>
                  <p>Available: {p.available_quantity}</p>
                  <p>Price: {p.price}</p>
                  <p>{p.desc}</p>
                </div>
                <button
                  style={{
                    width: "50%",
                    margin: "auto",
                    borderRadius: "10px",
                    backgroundColor: "#e7e7fb",
                    marginBottom: "5px",
                  }}
                  className="d-block py-2 px-4 uppercase"
                  onClick={() => handlePurchases(p._id)}
                >
                  purchase
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* </PurchaseContext.Provider> */}
      </div>
    </section>
  );
};

export default Parts;
