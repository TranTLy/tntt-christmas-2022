import React from 'react';
import styles from './ButtonCommon.module.scss';
import { Button } from 'antd';
import PropTypes from 'prop-types';
export const ButtonCommon = ({ disable, size = "default", onClick, children, loading, type = 'default', className,  ...props }) => {
    return (
        <Button
            disabled={disable}
            onClick={onClick}
            type={type}
            className={`${styles.buttonCommon} ${styles[`type_${type}`]} ${styles[`size_${size}`]} ${className}`}
            loading={loading}
            {...props}
        >
        {children}
        </Button>
    );
};
ButtonCommon.prototype = {
    size:PropTypes.oneOf(['default', 'small', 'normal', 'medium']),
    type:PropTypes.oneOf([ "primary", "default", "ghost","border", "border_dark", "positive"]),
}