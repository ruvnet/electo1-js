import pandas as pd
import numpy as np
from logger import logger

def analyze_data(processed_data):
    analysis_results = []
    
    for dataset in processed_data:
        # Calculate basic statistics
        stats = dataset.describe()
        
        # Identify top candidates
        if 'votes' in dataset.columns:
            top_candidates = dataset.nlargest(3, 'votes')['candidate'].tolist()
        elif 'popularity' in dataset.columns:
            top_candidates = dataset.nlargest(3, 'popularity')['candidate'].tolist()
        else:
            top_candidates = []
        
        # Calculate correlations
        correlations = dataset.corr()
        
        analysis_results.append({
            'stats': stats,
            'top_candidates': top_candidates,
            'correlations': correlations
        })
    
    logger.info(f"Analyzed {len(analysis_results)} datasets")
    return analysis_results

if __name__ == "__main__":
    # Test with sample data
    sample_data = [
        pd.DataFrame({'candidate': ['A', 'B', 'C'], 'votes': [100, 150, 120], 'popularity': [0.4, 0.5, 0.3]}),
        pd.DataFrame({'candidate': ['X', 'Y', 'Z'], 'votes': [200, 180, 220], 'popularity': [0.35, 0.4, 0.25]})
    ]
    analysis = analyze_data(sample_data)
    print(analysis)
