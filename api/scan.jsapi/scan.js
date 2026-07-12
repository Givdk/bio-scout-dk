export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: { code: 405, message: "Method not allowed" } });
    }

    const { prompt, base64 } = req.body;

    if (!prompt || !base64) {
        return res.status(400).json({ error: { code: 400, message: "Missing prompt or base64" } });
    }

    const API_KEY = process.env.GEMINI_API_KEY;
    if (!API_KEY) {
        return res.status(500).json({ error: { code: 500, message: "API key not configured on server" } });
    }

    try {
        const geminiRes = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{
                        parts: [
                            { text: prompt },
                            { inline_data: { mime_type: "image/jpeg", data: base64 } }
                        ]
                    }]
                })
            }
        );

        const data = await geminiRes.json();
        return res.status(200).json(data);

    } catch (e) {
        return res.status(500).json({ error: { code: 500, message: "Server error: " + e.message } });
    }
}export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: { code: 405, message: "Method not allowed" } });
    }

    const { prompt, base64 } = req.body;

    if (!prompt || !base64) {
        return res.status(400).json({ error: { code: 400, message: "Missing prompt or base64" } });
    }

    const API_KEY = process.env.GEMINI_API_KEY;
    if (!API_KEY) {
        return res.status(500).json({ error: { code: 500, message: "API key not configured on server" } });
    }

    try {
        const geminiRes = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{
                        parts: [
                            { text: prompt },
                            { inline_data: { mime_type: "image/jpeg", data: base64 } }
                        ]
                    }]
                })
            }
        );

        const data = await geminiRes.json();
        return res.status(200).json(data);

    } catch (e) {
        return res.status(500).json({ error: { code: 500, message: "Server error: " + e.message } });
    }
}
