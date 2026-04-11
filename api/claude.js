export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: { code: 405, message: "Method not allowed" } });
    }
    const { system, messages } = req.body;
    if (!messages) {
        return res.status(400).json({ error: { code: 400, message: "Missing messages" } });
    }
    try {
        const claudeRes = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.ANTHROPIC_API_KEY,
                "anthropic-version": "2023-06-01",
            },
            body: JSON.stringify({
                model: "claude-sonnet-4-20250514",
                max_tokens: 1000,
                system: system || "",
                messages,
            }),
        });
        const data = await claudeRes.json();
        return res.status(200).json(data);
    } catch (e) {
        return res.status(500).json({ error: { code: 500, message: "Server error: " + e.message } });
    }
}
