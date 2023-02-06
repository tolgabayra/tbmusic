import pandas as pd

col_names = [
    "title"
]

df = pd.read_csv("music.csv", header=0, usecols=["title", "artist", "top genre", "year", "dnce"])
df


print(df.to_string())
