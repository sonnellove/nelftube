import { Tooltip } from 'antd';
import React from 'react';

function MessageFilledHook({ title }) {
    return (
        <span className="post-basic-message">
            <Tooltip title={title} >
                Reply to
            </ Tooltip >
        </span>
    )
}

export default MessageFilledHook
