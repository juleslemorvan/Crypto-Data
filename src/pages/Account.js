import React from "react";
import SavedCoin from "../components/SavedCoin";

const Account = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Account</h1>
          <div>
            <h1>Welcome User</h1>
          </div>
        </div>
        <div>
          <button>Sign out</button>
        </div>
      </div>
      <div>
        <h1>Your coins</h1>
        <SavedCoin />
      </div>
    </div>
  );
};

export default Account;
