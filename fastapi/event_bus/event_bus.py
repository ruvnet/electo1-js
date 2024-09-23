import asyncio
from collections import defaultdict
from logger import logger

class EventBus:
    def __init__(self):
        self.subscribers = defaultdict(list)

    def subscribe(self, event_type, callback):
        self.subscribers[event_type].append(callback)
        logger.info(f"Subscribed to event: {event_type}")

    def unsubscribe(self, event_type, callback):
        self.subscribers[event_type].remove(callback)
        logger.info(f"Unsubscribed from event: {event_type}")

    async def publish(self, event_type, data):
        if event_type not in self.subscribers:
            return

        tasks = []
        for callback in self.subscribers[event_type]:
            task = asyncio.create_task(callback(data))
            tasks.append(task)

        await asyncio.gather(*tasks)
        logger.info(f"Published event: {event_type}")

event_bus = EventBus()

# Example usage
async def data_ingested_handler(data):
    print(f"Data ingested: {data}")

async def prediction_made_handler(data):
    print(f"Prediction made: {data}")

async def main():
    # Subscribe to events
    event_bus.subscribe("data_ingested", data_ingested_handler)
    event_bus.subscribe("prediction_made", prediction_made_handler)

    # Publish events
    await event_bus.publish("data_ingested", {"source": "API", "records": 100})
    await event_bus.publish("prediction_made", {"candidate": "A", "probability": 0.7})

if __name__ == "__main__":
    asyncio.run(main())
