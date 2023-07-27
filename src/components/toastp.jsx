import React from "react";
import classNames from "classnames";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import { BiError } from "react-icons/bi";

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
        <BiError/>
        </div>
        <div className="text-lg mr-44">
          <h1>Missing Premium</h1>
          
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