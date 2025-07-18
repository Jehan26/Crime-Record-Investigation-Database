-- Create Crime Record & Investigation Database schema

CREATE TABLE Officers (
    OfficerID SERIAL PRIMARY KEY,
    Name VARCHAR(100),
    Rank VARCHAR(50),
    Department VARCHAR(100)
);

CREATE TABLE Cases (
    CaseID SERIAL PRIMARY KEY,
    Title TEXT NOT NULL,
    Status VARCHAR(20) CHECK (Status IN ('Open', 'Closed', 'Under Investigation')),
    StartDate DATE NOT NULL,
    EndDate DATE,
    LeadOfficerID INT REFERENCES Officers(OfficerID)
);

CREATE TABLE Suspects (
    SuspectID SERIAL PRIMARY KEY,
    Name VARCHAR(100),
    Age INT,
    Gender VARCHAR(10),
    CaseID INT REFERENCES Cases(CaseID),
    Arrested BOOLEAN DEFAULT FALSE
);

CREATE TABLE Evidence (
    EvidenceID SERIAL PRIMARY KEY,
    Description TEXT,
    CollectedDate DATE,
    CaseID INT REFERENCES Cases(CaseID),
    UpdatedBy INT REFERENCES Officers(OfficerID)
);

-- Indexes
CREATE INDEX idx_case_status ON Cases(Status);
CREATE INDEX idx_suspect_name ON Suspects(Name);
