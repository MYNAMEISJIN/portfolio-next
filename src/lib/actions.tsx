
export const getData = async () => {
    const headers = { 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}` };

    const response = await fetch('https://api.netlify.com/api/v1/sites', { headers });

    if (!response.ok) {
        console.log("fail");
        throw new Error("Failed to fetch API data");
    }

    const data = await response.json();

    const filteredData = data.map((item:any) => ({
        title: item.name,
        ssl_url: item.ssl_url,
        screenshot_url: item.screenshot_url,
        git_address: item.build_settings.repo_url
    }));


    return filteredData;
}