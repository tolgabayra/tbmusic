import csv
import pandas as pd


class Suggest:
    @staticmethod
    def year_filter():
        results = []
        with open("./music.csv") as f:
            my_reader = csv.reader(f)
            for row in my_reader:
                results.append(row)
                print(results)
        return results

    def mood_filter(self):
        return

    def desc_filter(self):
        return

    @staticmethod
    def read_csv_file_with_pandas():
        df = pd.read_csv("music.csv", header=0, usecols=["title", "artist", "top genre", "nrgy", "year", "dnce", "val"])
        result = df["year"] > 2018
        return result
