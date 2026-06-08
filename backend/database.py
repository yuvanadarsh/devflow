import os
from sqlalchemy import create_engine # type: ignore 
from sqlalchemy.orm import declarative_base, sessionmaker # type: ignore
from dotenv import load_dotenv # type: ignore

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)

Session = sessionmaker(bind=engine, autocommit=False, autoflush=False)

Base = declarative_base()

def get_db():
    db = Session()
    try:
        yield db
    finally:
        db.close()