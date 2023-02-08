from fastapi import APIRouter, Request, Response
from model.process import Process
app = APIRouter()


@app.get("/data_processing/:id")
def get_process_data():
    return


@app.post("/data_processing")
def suggest_process(request: Request, process: Process):
    name = ""
    mod = ""
    year = ""


