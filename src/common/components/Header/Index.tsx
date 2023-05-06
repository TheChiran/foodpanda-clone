import "./style.scss";
import logo from "./../../../assets/images/icons/logo.svg";
import AddressSearch from "../Address-Search/Index";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const [addressDoprdownOpened, setAddressDropdownOpened] =
    useState<boolean>(false);
  const [deliveryTimeDropdownOpened, setDeliveryTimeDropdownOpened] =
    useState<boolean>(false);
  const [overlayVisibility, setOverlayVisibility] = useState<boolean>(false);
  const [locationAddress, setLocationAddress] = useState<string>("");

  const preventScroll = () => {
    window.scroll(0, 0);
  };

  const disableOverLay = () => {
    setOverlayVisibility(false);
    setAddressDropdownOpened(false);
    setDeliveryTimeDropdownOpened(false);
    window.removeEventListener("scroll", preventScroll);
  };

  const enableOverlay = () => {
    setOverlayVisibility(true);
    window.addEventListener("scroll", preventScroll);
  };

  const toggleAddressDropdown = () => {
    if (addressDoprdownOpened === false) enableOverlay();
    else disableOverLay();
    setAddressDropdownOpened(!addressDoprdownOpened);
    setDeliveryTimeDropdownOpened(false);
  };

  const toggleDeliveryTimeDropdown = () => {
    if (deliveryTimeDropdownOpened === false) enableOverlay();
    else disableOverLay();
    setDeliveryTimeDropdownOpened(!deliveryTimeDropdownOpened);
    setAddressDropdownOpened(false);
  };

  const checkIfDeliveryAddressHasValueOnDesktopView = () => {
    if (window.innerWidth >= 1440 && locationAddress !== "") {
      const element = document.getElementsByClassName("delivery-address");
      console.log("element: ", element);

      document
        .getElementsByClassName("delivery-address")[0]
        .classList.add("dsk-delivery-address-width-time");
      // dsk-delivery-address-width-time
      console.log("add class to delivery address");
    } else if (
      document
        .getElementsByClassName("delivery-address")[0]
        .classList.contains("dsk-delivery-address-width-time")
    ) {
      // remove class list from delivery-address
      document
        .getElementsByClassName("delivery-address")[0]
        .classList.remove("dsk-delivery-address-width-time"); 
    }
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      checkIfDeliveryAddressHasValueOnDesktopView
    );

    return () => {
      window.removeEventListener(
        "resize",
        checkIfDeliveryAddressHasValueOnDesktopView
      );
    };
  }, [window.innerWidth, locationAddress]);

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="delivery-address" onClick={toggleAddressDropdown}>
        <label htmlFor="" className="delivery-address__title">
          Delivering To
        </label>
        <div className="delivery-address__location">
          <div className="icon">
            <span className="material-icons">place</span>
          </div>
          <p className="title">New Address</p>
          <p className="exact-address">
            {locationAddress === "" ? "Select Address" : locationAddress}
          </p>
          {addressDoprdownOpened ? (
            <span className="material-icons expand-icon">expand_less</span>
          ) : (
            <span className="material-icons expand-icon">expand_more</span>
          )}
        </div>
        <AnimatePresence>
          {addressDoprdownOpened ? (
            <motion.div
              onClick={(event) => event.stopPropagation()}
              className="delivery-address__search"
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
            >
              <AddressSearch
                onLocationAddressChange={(value: string) =>
                  setLocationAddress(value)
                }
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {locationAddress !== "" ? (
        <div
          className="delivery-time"
          onClick={() => toggleDeliveryTimeDropdown()}
        >
          <label htmlFor="" className="delivery-time__title">
            When
          </label>
          <p className="delivery-time__time">ASAP</p>
          {deliveryTimeDropdownOpened ? (
            <span className="material-icons expand-icon">expand_less</span>
          ) : (
            <span className="material-icons expand-icon">expand_more</span>
          )}

          <AnimatePresence>
            {deliveryTimeDropdownOpened ? (
              <motion.div
                onClick={(event) => event.stopPropagation()}
                className="delivery-time__time-selection"
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
              >
                <div className="dates">
                  <div className="date">
                    <h2 className="day">Fri</h2>
                    <p className="date-value">31</p>
                  </div>
                  <div className="date">
                    <h2 className="day">Sat</h2>
                    <p className="date-value">1</p>
                  </div>
                  <div className="date">
                    <h2 className="day">Sun</h2>
                    <p className="date-value">2</p>
                  </div>
                </div>
                <div className="hr-line"></div>
                <ul className="time-list">
                  <li>Asap</li>
                  <li>1:15 PM - 1:30 PM</li>
                  <li>1:30 PM - 1:45 PM</li>
                  <li>1:45 PM - 2:00 PM</li>
                  <li>2:00 PM - 2:15 PM</li>
                  <li>2:15 PM - 2:30 PM</li>
                </ul>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      ) : null}

      <div className="language-selector">
        <button>BN</button>
      </div>

      <div className="user">
        <div className="icon">
          <span className="material-icons">person</span>
        </div>
        <p>Login</p>
      </div>

      <div className="favorite">
        <span className="material-icons">favorite_border</span>
      </div>

      <div className="cart">
        <span className="material-icons">shopping_bag</span>
      </div>

      <AnimatePresence>
        {overlayVisibility ? (
          <motion.div
            onClick={disableOverLay}
            className="nav-overlay"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
          />
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
