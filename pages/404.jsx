import classNames from "classnames";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { ButtonCommon } from "../src/commons";
import styles from "../styles/404.module.scss";

const NotFoundPage = () => {
    return (
        <div className={styles.notFoundPage}>
            <Head>
                <title>404!</title>
            </Head>
            <main className="u-main">
                <div className={classNames(styles.body, "u-content")}>
                    <h1 className={styles.title}>
                        <span>Opps, 404! Không tìm thấy trang</span>
                    </h1>

                    <ButtonCommon>
                        <Link href="/">Trở về trang chủ</Link>
                    </ButtonCommon>
                </div>
            </main>
        </div>
    );
};

export default NotFoundPage;
