import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { CustomButton } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import { thirdweb } from '../assets';

const CampaignDetails = ({}) => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { donate, getDonations, contract, address } = useStateContext();

    const [isLoading, setIsLoading] = useState(false);
    const [amount, setAmount] = useState('');
    const [donators, setDonators] = useState([]);

    const remainingDays = daysLeft(state.deadline);

    return (
        <div>
            {isLoading && '<Loader />'}

        </div>
    );
};

export default CampaignDetails;
// by Rokas with ❤️
