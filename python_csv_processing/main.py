import pandas as pd

col_names = [
    "title"
]

df = pd.read_csv("music.csv", header=0, usecols=["title", "artist", "top genre", "year", "dnce"])

rsf_filter = df[df['year'] > 2015]

# print(df.to_string())

print(rsf_filter)
