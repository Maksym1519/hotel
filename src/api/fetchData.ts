const fetchData = async () => {
    await new Promise((resolve) => setTimeout(resolve,1000))
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) {
        throw new Error('error')
    } else {
        return response.json()
    }
}

export default fetchData;