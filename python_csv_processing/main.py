import pandas as pd

# nryg = Enerji
# val = positif mod

# Mods;  Happy, Energetic, Sad, Calm, Study

df = pd.read_csv("music.csv", header=0, usecols=["title", "artist", "top genre", "nrgy", "year", "dnce", "val"])

rsf_filter = df[(df.dnce < 50) & (df.title == 'Let Me')]

year_filter = df[df['year'] > 2010]
happy_filter = ""
energetic_filter = ""
calm_and_sad_filter = ""



# print(df.to_string())

print(rsf_filter)
