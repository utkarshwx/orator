import React from "react";
import classNames from "classnames";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";

import styles from "../App.module.css";

const notify = () =>
  toast.custom(
    (t) => (
      <div
        className={classNames([
          styles.notificationWrapper,
          t.visible ? "top-0" : "-top-96",
        ])}
      >
        <div className="text-xl">
          <HiLightningBolt />
        </div>
        <div className="text-lg mr-36">
          <h1>Login to buy premium</h1>
          
        </div>
        <div className="absolute top-2 right-2 cursor-pointer text-lg" onClick={() => toast.dismiss(t.id)}>
          <MdOutlineClose />
        </div>
      </div>
    ),
    { id: "unique-notification", position: "top-center" }
  );

const App = () => {
  return (
    <div>
      <button classname="text-cs-dblue" onClick={notify}>Notify</button>
      <Toaster />
    </div>
  );
};

export default App;