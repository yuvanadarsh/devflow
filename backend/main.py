from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import engine, get_db, Base
from models import Project, Note
from schemas import ProjectCreate, ProjectResponse, NoteCreate, NoteResponse
import time

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Project Routes ---

@app.get("/projects", response_model=list[ProjectResponse])
def get_projects(db: Session = Depends(get_db)):
    time.sleep(1)
    return db.query(Project).all()

@app.get("/projects/{id}", response_model=ProjectResponse)
def get_project(id: str, db: Session = Depends(get_db)):
    project = db.query(Project).filter(Project.id == id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project

@app.post("/projects", response_model=ProjectResponse)
def create_project(data: ProjectCreate, db: Session = Depends(get_db)):
    project = Project(**data.model_dump())
    db.add(project)
    db.commit()
    db.refresh(project)
    return project

@app.patch("/projects/{id}", response_model=ProjectResponse)
def update_project(id: str, data: ProjectCreate, db: Session = Depends(get_db)):
    project = db.query(Project).filter(Project.id == id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    for key, value in data.model_dump().items():
        setattr(project, key, value)
    db.commit()
    db.refresh(project)
    return project

@app.delete("/projects/{id}")
def delete_project(id: str, db: Session = Depends(get_db)):
    project = db.query(Project).filter(Project.id == id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    db.delete(project)
    db.commit()
    return {"ok": True}

# --- Note Routes ---

@app.get("/projects/{project_id}/notes", response_model=list[NoteResponse])
def get_notes(project_id: str, db: Session = Depends(get_db)):
    return db.query(Note).filter(Note.project_id == project_id).all()

@app.post("/projects/{project_id}/notes", response_model=NoteResponse)
def create_note(project_id: str, data: NoteCreate, db: Session = Depends(get_db)):
    note = Note(**data.model_dump())
    db.add(note)
    db.commit()
    db.refresh(note)
    return note

@app.patch("/notes/{id}", response_model=NoteResponse)
def update_note(id: str, data: NoteCreate, db: Session = Depends(get_db)):
    note = db.query(Note).filter(Note.id == id).first()
    if not note:
        raise HTTPException(status_code=404, detail="Note not found")
    for key, value in data.model_dump().items():
        setattr(note, key, value)
    db.commit()
    db.refresh(note)
    return note

@app.delete("/notes/{id}")
def delete_note(id: str, db: Session = Depends(get_db)):
    note = db.query(Note).filter(Note.id == id).first()
    if not note:
        raise HTTPException(status_code=404, detail="Note not found")
    db.delete(note)
    db.commit()
    return {"ok": True}

@app.get("/health")
def health():
    return {"status": "ok"}