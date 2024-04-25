export default async function fetchPDF() {
    const username = import.meta.env.VITE_CVTOPDF_API_USER;
    const password = import.meta.env.VITE_CVTOPDF_API_PASSWORD;
    const base64Credentials = btoa(`${username}:${password}`);

    try {
        const response = await fetch(import.meta.env.VITE_CVTOPDF_API_URL, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${base64Credentials}`,
                'Accept': 'application/pdf'
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const blob = await response.blob();
        console.log(`Received PDF size: ${blob.size} bytes`);
        return blob;
    } catch (error) {
        console.error('Error fetching PDF:', error);
        throw error;
    }
};