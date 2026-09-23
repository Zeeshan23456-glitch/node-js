const API_URL = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const users = await response.json();

        // Filter users whose company catchPhrase contains
        // "group" or "service" (case-insensitive)
        const filteredUsers = users.filter(({ company }) => {
            const phrase = company.catchPhrase.toLowerCase();

            return phrase.includes("group") || phrase.includes("service");
        });

        // Transform data using Object Destructuring
        const formattedUsers = filteredUsers.map(
            ({ name, email, address: { city } }) =>
                `User: ${name} | Email: ${email} | City: ${city}`
        );

        console.log(formattedUsers);
    } catch (error) {
        console.error("Error fetching users:", error.message);
    }
}

fetchUsers();