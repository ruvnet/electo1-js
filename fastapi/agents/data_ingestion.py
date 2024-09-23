import aiohttp
import asyncio
from logger import logger

async def fetch_data(session, url):
    async with session.get(url) as response:
        return await response.json()

async def ingest_data():
    sources = [
        "https://api.example1.com/election_data",
        "https://api.example2.com/polling_data"
    ]

    async with aiohttp.ClientSession() as session:
        tasks = [fetch_data(session, url) for url in sources]
        results = await asyncio.gather(*tasks)

    logger.info(f"Data ingested from {len(results)} sources")
    return results

if __name__ == "__main__":
    asyncio.run(ingest_data())
