import pytest
from agents.data_ingestion import ingest_data
from agents.data_processing import process_data
from agents.analysis import analyze_data
from agents.prediction import train_model, make_prediction
from agents.optimization import optimize_model
import pandas as pd
import numpy as np

@pytest.fixture
def sample_data():
    return [
        pd.DataFrame({'candidate': ['A', 'B', 'C'] * 10, 'votes': np.random.randint(100, 200, 30), 'popularity': np.random.random(30)}),
        pd.DataFrame({'candidate': ['X', 'Y', 'Z'] * 10, 'votes': np.random.randint(150, 250, 30), 'popularity': np.random.random(30)})
    ]

@pytest.mark.asyncio
async def test_data_ingestion():
    data = await ingest_data()
    assert isinstance(data, list)
    assert len(data) > 0

def test_data_processing(sample_data):
    processed_data = process_data(sample_data)
    assert isinstance(processed_data, list)
    assert len(processed_data) == len(sample_data)
    for df in processed_data:
        assert isinstance(df, pd.DataFrame)
        assert 'candidate' in df.columns
        assert 'votes' in df.columns
        assert 'popularity' in df.columns

def test_analysis(sample_data):
    processed_data = process_data(sample_data)
    analysis_results = analyze_data(processed_data)
    assert isinstance(analysis_results, list)
    assert len(analysis_results) == len(processed_data)
    for result in analysis_results:
        assert 'stats' in result
        assert 'top_candidates' in result
        assert 'correlations' in result

def test_prediction(sample_data):
    processed_data = process_data(sample_data)
    combined_data = pd.concat(processed_data, ignore_index=True)
    X = combined_data.drop(['candidate'], axis=1)
    y = combined_data['candidate']
    
    model = train_model([combined_data])
    assert model is not None
    
    sample_input = pd.DataFrame({'votes': [180], 'popularity': [0.6]})
    prediction = make_prediction(model, sample_input)
    assert isinstance(prediction, list)
    assert len(prediction) > 0
    assert all('candidate' in p and 'probability' in p for p in prediction)

def test_optimization(sample_data):
    processed_data = process_data(sample_data)
    combined_data = pd.concat(processed_data, ignore_index=True)
    X = combined_data.drop(['candidate'], axis=1)
    y = combined_data['candidate']
    
    optimized_model = optimize_model(X, y)
    assert optimized_model is not None
    assert hasattr(optimized_model, 'predict')
    assert hasattr(optimized_model, 'predict_proba')
