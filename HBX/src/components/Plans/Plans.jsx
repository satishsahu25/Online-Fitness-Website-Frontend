import React from "react";
import { plansData } from "../../data/plansData";
import "./plans.css";

const Plans = () => {
  return (
    <div className="planscontainer" id="plans">
      <div className="blur blurplans1"></div>
      <div className="blur blurplans2"></div>
      <div className="programheader" style={{ gap: "2rem" }}>
        <span className="stroketext">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroketext">NOW WITHUS</span>
      </div>

      {/* plans card */}

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, ind) => (
                <div className="feature">
                  <i class="bx bx-check"></i>
                  <span key={ind}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
                <span>See more benefits</span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
