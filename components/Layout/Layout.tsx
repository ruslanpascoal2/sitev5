import { ReactNode } from "react";
import styles from "./Layout.module.scss";

type LayoutProps = {
    children?: ReactNode;
}

export function Container({children}: LayoutProps){
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}


export function PageLayout({children}: LayoutProps){
    return(
        <div className={styles.pageLayout}>
            {children}
        </div>
    )
}
