const promise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            success ? resolve("Data fetched successfully") : reject("Error fetching data");
        }, 4000);
    });
}

const fetchData = async () => {
    try {
        const rep = await promise();
        console.log("Result:", rep);
    } catch (error) {
        console.log("error:", error);
    }
}

fetchData();