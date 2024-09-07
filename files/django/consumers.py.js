export const consumersPy = `
import json
from channels.generic.websocket import AsyncWebsocketConsumer


class SomeConsumer(AsyncWebsocketConsumer):
    async def connect(self) -> None:
        await self.accept()

    async def disconnect(self, close_code) -> None:
        pass

    async def receive(self, text_data) -> None:
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        await self.send(text_data=json.dumps({
            'message': message
        }))
`
