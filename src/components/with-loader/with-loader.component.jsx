import React from 'react';
import './loader.styles.scss';
const withLoader = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <div className="loader-wrapper">
            <div className="loader">Loading...</div>
        </div>
    ) :
        (
            <WrappedComponent {...otherProps} />
        )
}

export default withLoader;