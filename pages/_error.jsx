import classNames from "classnames";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { ButtonCommon } from "../src/commons";
import styles from "@src/styles/error.module.scss";

const ErrorPage = () => {
    return (
        <div className={styles.errorPage}>
            <Head>
                <title>Error!</title>
            </Head>
            <main className="u-main">
                <div className={classNames(styles.body, "u-content")}>
                    <h1 className={styles.title}>Có lỗi xảy ra</h1>

                    <ButtonCommon>
                        <Link href="/">Trở về trang chủ</Link>
                    </ButtonCommon>
                </div>
            </main>
        </div>
    );
};

export default ErrorPage;
