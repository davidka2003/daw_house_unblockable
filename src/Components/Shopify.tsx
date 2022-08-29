import React from "react";
import { useEffect } from "react";

const ShopifyComponent = () => {
  useEffect(() => {
    (function () {
      var scriptURL = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        var script = document.createElement("script");
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        var client = window.ShopifyBuy.buildClient({
          domain: "desperateapewives.myshopify.com",
          storefrontAccessToken: "b31d741fa3db438eceed02a8eb212c0b",
        });
        window.ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent("product", {
            id: "7815639269590",
            node: document.getElementById("product-component-1661799842177"),
            moneyFormat: "%24%7B%7Bamount%7D%7D",
            options: {
              product: {
                styles: {
                  product: {
                    "@media (min-width: 601px)": {
                      "max-width": "100%",
                      "margin-left": "0",
                      "margin-bottom": "50px",
                    },
                    "text-align": "left",
                  },
                  title: {
                    "font-size": "26px",
                    color: "#f9f9f9",
                  },
                  button: {
                    ":hover": {
                      "background-color": "#4c9ca5",
                    },
                    "background-color": "#54adb7",
                    ":focus": {
                      "background-color": "#4c9ca5",
                    },
                    "padding-left": "45px",
                    "padding-right": "45px",
                  },
                  price: {
                    "font-size": "18px",
                    color: "#f9f9f9",
                  },
                  compareAt: {
                    "font-size": "15.299999999999999px",
                    color: "#f9f9f9",
                  },
                  unitPrice: {
                    "font-size": "15.299999999999999px",
                    color: "#f9f9f9",
                  },
                  description: {
                    color: "#f9f9f9",
                  },
                },
                layout: "horizontal",
                contents: {
                  img: false,
                  imgWithCarousel: true,
                  button: false,
                  buttonWithQuantity: true,
                  description: true,
                },
                width: "100%",
                text: {
                  button: "Add to cart",
                },
              },
              productSet: {
                styles: {
                  products: {
                    "@media (min-width: 601px)": {
                      "margin-left": "-20px",
                    },
                  },
                },
              },
              modalProduct: {
                contents: {
                  img: false,
                  imgWithCarousel: true,
                  button: false,
                  buttonWithQuantity: true,
                },
                styles: {
                  product: {
                    "@media (min-width: 601px)": {
                      "max-width": "100%",
                      "margin-left": "0px",
                      "margin-bottom": "0px",
                    },
                  },
                  button: {
                    ":hover": {
                      "background-color": "#4c9ca5",
                    },
                    "background-color": "#54adb7",
                    ":focus": {
                      "background-color": "#4c9ca5",
                    },
                    "padding-left": "45px",
                    "padding-right": "45px",
                  },
                  title: {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "bold",
                    "font-size": "26px",
                    color: "#4c4c4c",
                  },
                  price: {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "normal",
                    "font-size": "18px",
                    color: "#4c4c4c",
                  },
                  compareAt: {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "normal",
                    "font-size": "15.299999999999999px",
                    color: "#4c4c4c",
                  },
                  unitPrice: {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "normal",
                    "font-size": "15.299999999999999px",
                    color: "#4c4c4c",
                  },
                  description: {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "normal",
                    "font-size": "14px",
                    color: "#4c4c4c",
                  },
                },
                text: {
                  button: "Add to cart",
                },
              },
              option: {},
              cart: {
                styles: {
                  button: {
                    ":hover": {
                      "background-color": "#4c9ca5",
                    },
                    "background-color": "#54adb7",
                    ":focus": {
                      "background-color": "#4c9ca5",
                    },
                  },
                },
                text: {
                  total: "Subtotal",
                  button: "Checkout",
                },
                popup: false,
              },
              toggle: {
                styles: {
                  toggle: {
                    "background-color": "#54adb7",
                    ":hover": {
                      "background-color": "#4c9ca5",
                    },
                    ":focus": {
                      "background-color": "#4c9ca5",
                    },
                  },
                },
              },
            },
          });
        });
      }
    })();
  }, []);
  return (
    <>
      <div className={"card"} style={{ paddingLeft: "30px", paddingRight: "30px" }}>
        <div id="product-component-1661799842177"></div>
      </div>
      <script type="text/javascript"></script>
    </>
  );
};
export default ShopifyComponent;
declare global {
  interface Window {
    ShopifyBuy: any;
  }
}
