from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class ProjectCreate(BaseModel):
    id: str
    name: str
    status: str
    description: Optional[str] = None
    deadline: Optional[str] = None
    pinned: bool = False

class ProjectResponse(BaseModel):
    id: str
    name: str
    status: str
    description: Optional[str] = None
    deadline: Optional[str] = None
    pinned: bool
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class NoteCreate(BaseModel):
    id: str
    project_id: str
    title: str
    content: Optional[str] = None
    type: str = "note"

class NoteResponse(BaseModel):
    id: str
    project_id: str
    title: str
    content: Optional[str] = None
    type: str
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True