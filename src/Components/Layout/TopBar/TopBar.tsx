import { FC } from "react";
import classes from "./TopBar.module.scss"
import { Link } from "react-router-dom";
import { SearchInput } from "../../Common/SearchInput/SearchInput";

export const TopBar: FC = () => {
    return (
        <div className={classes.parent}>
            <div className={classes.content}>
                <div className={classes.left}>
                    <Link to="/" className={classes.logo} />
                </div>
                <div className={classes.center}>
                    <SearchInput/>
                </div>
                <div className={classes.right}>
                    <Link to="/login" className={classes.user} />
                </div>
            </div>
        </div>
    )
}