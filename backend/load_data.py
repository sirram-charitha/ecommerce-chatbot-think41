import pandas as pd
import sqlite3

conn = sqlite3.connect('database.db')

files = ['users', 'orders', 'order_items', 'products', 'inventory_items', 'distribution_centers']

for file in files:
    df = pd.read_csv(f'{file}.csv')
    df.to_sql(file, conn, if_exists='replace', index=False)

conn.close()
