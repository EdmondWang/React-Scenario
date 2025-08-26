import { useEffect, useState } from 'react';
import {NotReleasedInterval} from './not-released-interval'
import {ReleaseOngoingHttpRequest} from './release-ongoing-http-request'

const MemoryLeadFeature = () => {
    

    return (
        <div>
            <h1>Memory Leak Demo Component</h1>
            <h3>Not released interval</h3>
           <NotReleasedInterval />
           <h3>Release ongoing http request</h3>
           <ReleaseOngoingHttpRequest />
        </div>
    );
};

export default MemoryLeadFeature;
