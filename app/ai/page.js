"use client"

import { useEffect, useState } from "react";
import './styles.css';

export default function Page() {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // make http call to api at /api/ai/bedrock
            const apiResponse = await fetch('/api/ai/bedrock', {
                method: 'POST',
                body: JSON.stringify({ prompt }),
            });

            const promptResponse = await apiResponse.json();
    
            console.log('Response from bedrock (page.js): ', promptResponse);
            setResponse(promptResponse.response);
        } catch (error) {
            console.log('Error calling bedrock: ', error);
            setResponse(error.message);
        }
    };

    return (
        <div className="grid grid-flow-col gap-4">
            <form onSubmit={handleSubmit}>
                <label className="col-span-1 mx-5">
                    Prompt:
                    <input type="text" className="grid-span-2 mx-5" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
                </label>
                <button className="col-span-2 row-start-auto bg-slate-500" type="submit">Submit</button>
            </form>
            <div className="row-start-2">
                <div className="col-span-1">Response: { response }</div>
            </div>
        </div>
    )
}