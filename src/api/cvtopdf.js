export default async function fetchPDF() {
    const username = import.meta.env.VITE_CVTOPDF_API_USER;
    const password = import.meta.env.VITE_CVTOPDF_API_PASSWORD;
    const base64Credentials = btoa(`${username}:${password}`);

    try {
        const response = await fetch(import.meta.env.VITE_CVTOPDF_API_URL, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${base64Credentials}`
            },
            redirect: 'follow'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const buf = await response.arrayBuffer();
        const data = Buffer.from(buf).toString('base64');
        return data;
    } catch (error) {
        console.error('Error fetching PDF:', error);
        throw error;
    }
};