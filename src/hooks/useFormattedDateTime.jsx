import React from 'react'

function useFormattedDateTime(dateTimeString) {
    const dateTime = new Date(dateTimeString);

    const formattedDateTime = dateTime.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).replace(/\./g, '.');
  return formattedDateTime;
}

export default useFormattedDateTime