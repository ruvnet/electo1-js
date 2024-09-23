import pandas as pd
from logger import logger

def process_data(raw_data):
    processed_data = []
    for dataset in raw_data:
        df = pd.DataFrame(dataset)
        
        # Remove rows with missing values
        df.dropna(inplace=True)
        
        # Normalize numerical columns
        numerical_columns = df.select_dtypes(include=['float64', 'int64']).columns
        df[numerical_columns] = (df[numerical_columns] - df[numerical_columns].mean()) / df[numerical_columns].std()
        
        processed_data.append(df)
    
    logger.info(f"Processed {len(processed_data)} datasets")
    return processed_data

if __name__ == "__main__":
    # Test with sample data
    sample_data = [
        {'candidate': ['A', 'B', 'C'], 'votes': [100, 150, 120]},
        {'candidate': ['X', 'Y', 'Z'], 'popularity': [0.4, 0.3, 0.3]}
    ]
    processed = process_data(sample_data)
    print(processed)
