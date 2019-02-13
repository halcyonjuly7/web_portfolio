import pytest

from core import app_factory



@pytest.fixture
def client():
    test_client = app_factory().test_client()
    yield test_client



def test_periodic(client):
    resp = client.get("/periodic_table")
    assert b"home_bundle.js" in resp.data