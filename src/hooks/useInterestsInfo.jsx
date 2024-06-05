import apiFunction from '@/util/apiFunction';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function useInterestsInfo(interestIds) {
    const [interests, setInterests] = useState([]);

    useEffect(() => {
        const getInterestInfo = async () => {
          try {
            const getInterests = await Promise.all(
              interestIds.map((interest) =>
                apiFunction.getData(`${import.meta.env.VITE_API_URL}/interests/${interest}`)
              )
            );
            const items = getInterests.map((result) => ({
              id: result.data.data.id,
              name: result.data.data.name,
            }));
            setInterests(items);
          } catch (error) {
            console.log(error);
          }
        };
        getInterestInfo();
      }, [interestIds]);
    
      return interests;
}

export default useInterestsInfo