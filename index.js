const btn = document.getElementById('bn6');
btn.addEventListener('click', async () => {
    const longurl = document.getElementById('longur').value;
    // const short = await fetch(`https://tinyurl.com/api-create.php?url=-${longurl}`).then(response => response.json() ).then( data => console.log(data) );

    let linkRequest = {
        destination: longurl,
        domain: { fullName: "rebrand.ly" }
    };

    let requestHeaders = {
        "Content-Type": "application/json",
        "apikey": "21e78bb9bfb14e9aaa7e1f644ca427b6",
        // "workspace": "YOUR_WORKSPACE_ID"
    };

    $.ajax({
        url: "https://api.rebrandly.com/v1/links",
        type: "post",
        data: JSON.stringify(linkRequest),
        headers: requestHeaders,
        dataType: "json",
        success: (link) => {
            console.log(`Long URL was ${link.destination}, short URL is ${link.shortUrl}`);
            shorty.value = link.shortUrl;
        },
        error: (xhr, status, error) => {
            console.error("Error:", error);
        }
    
    });

const shorty = document.getElementById('shorturl');
const btn2 = document.getElementById('copyitem');
btn2.addEventListener('click', () => {
    shorty.select();
    window.navigator.clipboard.writeText(shorty.value);
});
});
