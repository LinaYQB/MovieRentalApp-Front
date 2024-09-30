import { FC, ReactNode } from "react";
import classes from "./Page.module.scss"
import { TopBar } from "../TopBar/TopBar";
import { Footer } from "../Footer/Footer";

interface PageProps {
    children: ReactNode;
}

export const Page: FC<PageProps> = ({children}) => {
    return (
        <div className={classes.parent}>
            <TopBar/>
            <div className={classes.content}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}