import pandas as pd
import psycopg2
import os
from typing import Dict, Any

class DataHandler:
    def __init__(self):
        self.conn = psycopg2.connect(
            host=os.environ['PGHOST'],
            database=os.environ['PGDATABASE'],
            user=os.environ['PGUSER'],
            password=os.environ['PGPASSWORD'],
            port=os.environ['PGPORT']
        )

    def initialize_database(self):
        with self.conn.cursor() as cur:
            cur.execute("""
                CREATE TABLE IF NOT EXISTS election_data (
                    id SERIAL PRIMARY KEY,
                    region VARCHAR(100),
                    population INTEGER,
                    gdp FLOAT,
                    unemployment FLOAT,
                    result VARCHAR(50)
                )
            """)
            
            # Insert sample data
            sample_data = [
                ('Region A', 1000000, 50000, 5.5, 'Party X'),
                ('Region B', 1500000, 75000, 4.8, 'Party Y'),
                ('Region C', 800000, 40000, 6.2, 'Party X'),
                ('Region D', 1200000, 60000, 5.0, 'Party Y'),
            ]
            cur.executemany("""
                INSERT INTO election_data (region, population, gdp, unemployment, result)
                VALUES (%s, %s, %s, %s, %s)
            """, sample_data)
            
            self.conn.commit()

    def load_training_data(self):
        query = "SELECT * FROM election_data"
        df = pd.read_sql_query(query, self.conn)
        return self.preprocess_data(df)

    def preprocess_data(self, df: pd.DataFrame) -> pd.DataFrame:
        # Perform any necessary data preprocessing
        df = df.dropna()  # Remove rows with missing values
        df = pd.get_dummies(df, columns=['region'])  # One-hot encode 'region' column
        return df

    def preprocess_input(self, input_data: Dict[str, Any]) -> pd.DataFrame:
        # Convert input data to DataFrame
        df = pd.DataFrame([input_data])
        
        # Perform the same preprocessing steps as for training data
        df = self.preprocess_data(df)
        
        # Ensure all columns from training data are present
        training_columns = self.get_training_columns()
        for col in training_columns:
            if col not in df.columns:
                df[col] = 0
        
        return df[training_columns]

    def get_training_columns(self):
        # Retrieve column names from the training data
        query = "SELECT * FROM election_data LIMIT 1"
        df = pd.read_sql_query(query, self.conn)
        df = self.preprocess_data(df)
        return df.columns.tolist()

    def __del__(self):
        self.conn.close()
