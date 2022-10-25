import React from "react";
import "./Box.css";
import("./App.js");
const Box = (Obj) => {
  function show() {
    document.getElementById("modal_container").style.display = "block";
    document.getElementById("allBagsData").style.display = "none";
    var content = document.getElementById("content");
    document.getElementById("addImg").src = Obj.src;
    document.getElementById("head").innerHTML = Obj.name;
    content.innerHTML =
      "color: " +
      Obj.color +
      ", type: " +
      Obj.type +
      "\n" +
      ", price: " +
      Obj.salePrice +
      ", USD" +
      "\n" +
      ", inStock: " +
      Obj.inStock +
      "\n" +
      ", brand: " +
      Obj.brand +
      "\n" +
      ", size: " +
      Obj.size +
      "\n" +
      ", Short Description: " +
      Obj.shortDesc +
      "";
    var btn_close = document.getElementById("close");
    btn_close.addEventListener("click", () => {
      document.getElementById("allBagsData").style.display = "block";
      document.getElementById("modal_container").style.display = "none";
    });
  }
  return (
    <li
      className="kuvmProduct"
      data-id="99-98"
      data-isdeleted=""
      data-instock="yes"
      data-itemgroupid="99"
      id="kuvmProduct_id"
    >
      <div className="kuvmProdWrap">
        <div className="kuvmProdTop">
          <div className="kuvmImgWrap">
            <a href="void(0-)" className="kuvmProductLink">
              <span className="kuvmImgSpan">
                <img src={Obj.src} alt={Obj.alt} className="kuProdImg" />
              </span>
            </a>
          </div>
        </div>
        <div className="kuvmProdBottom">
          <div classNames="kuvmNameDesc">
            <div classNames="kuvmName" data-name={Obj.name}>
              <a href="void(0)" className="kuvmProductLink">
                {Obj.name}
              </a>
            </div>
            <div className="kuvmsku" data-sku="24-MB01">
              <small className="text-muted">{Obj.sku}</small>
            </div>
          </div>
          <div className="kuPrice">
            <div className="kuSalePrice kuStartPrice">{Obj.salePrice} USD</div>
            <div className="kuClearBoth"></div>
            <button
              onClick={() => {
                show();
              }}
            >
              Check Info
            </button>
          </div>
        </div>
        <div className="kuvmClearLeft"></div>
      </div>
    </li>
  );
};

export default Box;
