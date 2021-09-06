import Image from "next/image";
import { useState, useEffect } from "react";

import { Typography } from "@material-ui/core";
import useStyles from "./styles";

const Account = ({ total, account, filter, setFilter }) => {
  const classes = useStyles();
  const [selected, setSelected] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log("runs");
    if (filter === account.handle || filter === "") {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [filter]);

  return (
    <div
      className={`${classes.account} } ${
        selected ? classes.account_selected : classes.account_unselected
      }`}
      style={{ flexBasis: `${(1 / total) * 100}%` }}
      onClick={() => setFilter(account.handle)}
    >
      <div className={classes.account_img}>
        <Image
          src={account.pic}
          layout="fill"
          objectPosition="center"
          objectFit="cover"
          onLoad={() => setLoaded(true)}
        />
        {!loaded && <div className="skeleton" style={{ zIndex: 2 }} />}
      </div>
      <Typography variant="body2">
        <strong>@{account.handle}</strong>
      </Typography>
      <Typography variant="body2" className={classes.followers}>
        {account.followers} followers
      </Typography>
    </div>
  );
};

export default Account;
