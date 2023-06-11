
export const POST = async (request) => {
    try {
        const data = await request.json();
        console.log(data);
        return new Response(JSON.stringify(data), { status: 200 })
    } catch (error) {
        return new Response(error, { status: 500 })
    }
} 