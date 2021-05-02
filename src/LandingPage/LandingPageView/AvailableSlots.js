import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useHttpClient } from '../../Shared/hooks/http-hook';
import { c } from './demoslots';
import CenterDetails from './CenterDetails';
const AvailableSlots =  (props) =>{
    const location = useLocation();
    const { isLoading, sendRequest } = useHttpClient();
    const [availableSlots, setAvailableSlots] = useState([]);

    const queryParams = new URLSearchParams(location.search);
    const districtId = queryParams.get('districtId');
    const minAge = queryParams.get('minAge');
    useEffect(() => {
        const fetchNextSlots = async () => {
            try {
                const slots = await sendRequest(`http://65.0.93.90:9090/vaccine-notifier/getNextSlot?district_id=${districtId}&minAge=${minAge}`);
                setAvailableSlots(slots)
            } catch (e) {
                console.log(e);
            }
        }

        fetchNextSlots();
    },[sendRequest, districtId, minAge]);

    return(
        <>
            {c.map(center => <CenterDetails key={center.center_id} name={center.name} pincode={center.pincode} sessions={center.sessions} state_name={center.state_name} district_name={center.district_name} block_name={center.block_name}/>)}
        </>
    );
};
export default AvailableSlots;