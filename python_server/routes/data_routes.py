from fastapi import APIRouter, Request, Response

app = APIRouter()


@app.get("/data_processing")
def process_data(request: Request, response: Response):
    return {"message": "Merhaba"}
