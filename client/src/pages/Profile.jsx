import React, {useEffect, useState} from 'react';
import {useStateContext} from "../context";
import DisplayCampaigns from "../components/DisplayCampaigns";

const Profile = ({}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [campaigns, setCampaigns] = useState([]);

    const { address, contract, getUserCampaigns } = useStateContext();

    const fetchCampaigns = async () => {
        setIsLoading(true);
        const data = await getUserCampaigns();
        setCampaigns(data);
        setIsLoading(false);
    }

    useEffect(() => {
        if(contract) fetchCampaigns();
    }, [address, contract]);

    return (
        <DisplayCampaigns
            title="All Campaigns"
            campaigns={campaigns}
            isLoading={isLoading}
        />
    );
};

export default Profile;
// by Rokas with ❤️
