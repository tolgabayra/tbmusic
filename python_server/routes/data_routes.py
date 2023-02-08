from fastapi import APIRouter, Request, Response
from model.process import Process
from suggest.suggest_file import Suggest

app = APIRouter()
# Suggest Class Processing
suggest = Suggest()


@app.get("/data_processing/")
def get_process_data():
    result = suggest.year_filter()
    return {"message": "Tolga"}


@app.post("/data_processing")
def suggest_process(request: Request, process: Process):
    name = ""
    mod = ""
    year = ""


@app.get("/tolga")
def tolga():
    print(suggest.read_csv_file_with_pandas())
    return {"message": "Tolga"}
