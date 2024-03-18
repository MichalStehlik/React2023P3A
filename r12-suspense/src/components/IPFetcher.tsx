import React, { useState, useEffect } from 'react';

type IPFetcherProps = {
    ip: string;
}

type IPFetcherResult = {
    ip: string;
    city: string;
    region: string;
    country: string;
    loc: string;
    org: string;
    postal: string;
    timezone: string;
    readme: string;
}

// AJAX - Asynchronous JavaScript and XML
// XHR request to fetch the IP details (XML Http Request)
// axios
// fetch

// GET, POST, PUT, DELETE, PATCH, OPTIONS

// Promise - then (100,200,300), catch (400,500)

const IPFetcher: React.FC<IPFetcherProps> = ({ ip }) => {
    //const [result, setResult] = useState<IPFetcherResult | null>(null);
    const [error, setError] = useState<Error | null>(null);
    let status = "pending";
    let result: IPFetcherResult | null = null;

    let promis = fetch(`https://ipinfo.io/${ip}/geo`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            console.log(response); return response.json();
        })
        .then(data => {
            console.log(data);
            status = "data";
            result = data;
        })
        .catch(error => {
            console.error(error);
            status = "error";
            setError(error);
        });

    if (status === "pending") {
        throw promis;
    } else if (status === "error") {
        throw error;
    }
    return (
        <div>
            <pre>
                {JSON.stringify(result)}
            </pre>
            <dl>
                <dt>IP</dt>
                <dd>{result?.ip}</dd>
                <dt>City</dt>
                <dd>{result?.city}</dd>
                <dt>Region</dt>
                <dd>{result?.region}</dd>
                <dt>Country</dt>
                <dd>{result?.country}</dd>
                <dt>Location</dt>
                <dd>{result?.loc}</dd>
                <dt>Organization</dt>
                <dd>{result?.org}</dd>
                <dt>Postal</dt>
                <dd>{result?.postal}</dd>
                <dt>Timezone</dt>
                <dd>{result?.timezone}</dd>
            </dl>
        </div>
    );
}

export default IPFetcher;