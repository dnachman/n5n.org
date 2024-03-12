"use client"

import { useEffect, useState } from "react";
import './styles.css';

export default function Page() {
    const [prompt, setPrompt] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(prompt);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className="grid grid-cols-1">
                    Prompt:
                    <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
                </label>
                <button className="grid-cols-1" type="submit">Submit</button>
            </form>
            <div >
                <p className="grid grid-cols-1">Prompt: {prompt}</p>
            </div>
        </>
    )
}