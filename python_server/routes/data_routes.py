from fastapi import APIRouter

app = APIRouter()


@app.get("/data_processing")
def process_data():
    return {"message": "Merhaba"}
