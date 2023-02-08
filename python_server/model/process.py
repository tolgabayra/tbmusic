from pydantic import BaseModel


class Process(BaseModel):
    name: str
    mood: str
    year: int
    desc: str
