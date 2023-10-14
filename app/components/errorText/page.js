import React from 'react';

const ErrorText = ({error}) => {
    if(error === "") return null;

    return (
        <h4 className='text-red-500'>
            {error}
        </h4>
    )
}

export default ErrorText;