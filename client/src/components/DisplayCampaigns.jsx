import React from 'react';
import { useNavigate } from 'react-router-dom';

import { loader } from '../assets';


const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
    const navigate = useNavigate();

    const handleNavigate = (campaign) => {
        navigate(`/campaign-details/${campaign.title}`, { state: campaign });
    }

    return (
        <div>
            <h1>Display Campaigns</h1>
        </div>
    );
};

export default DisplayCampaigns;
// by Rokas with ❤️
