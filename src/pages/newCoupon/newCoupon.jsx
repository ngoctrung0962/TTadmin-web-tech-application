import couponApi from "../../api/couponApi";
import "./newCoupon.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { showNotification } from "../../utils/showNotification";

export default function NewCoupon() {
  let history = useHistory();
  const initValue = {
    couponId: "",
    discount: "",
    expiredTime: new Date(),
    effectiveTime: new Date(),
    description: "",
  };
  const [formvalues, setFormvalues] = useState(initValue);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await couponApi.add(formvalues);
      console.log(formvalues);
      showNotification("success", "Add succes!!", "", "OK");
      history.push("/coupons");
    } catch (error) {
      showNotification("error", "Add fail!!", "", "OK");
    }
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Coupon</h1>
      <form onSubmit={handleSubmit} className="addProductForm">
        <div className="addProductItem">
          <label>Code</label>
          <input
            type="text"
            name="couponId"
            value={formvalues.couponId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="addProductItem">
          <label>Discount</label>
          <input
            type="text"
            name="discount"
            value={formvalues.discount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="addProductItem">
          <label>ExpiredTime</label>
          <input
            type="date"
            name="expiredTime"
            value={formvalues.expiredTime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="addProductItem">
          <label>EffetiveTime</label>
          <input
            type="date"
            name="effectiveTime"
            value={formvalues.effectiveTime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formvalues.description}
            onChange={handleChange}
            required
          />
        </div>
        {/* button back */}
        <Link to="/coupons" className="buttonBack">
          Back
        </Link>
        <button type="submit" className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
