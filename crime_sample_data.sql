-- OFFICERS
INSERT INTO Officers (Name, Rank, Department) VALUES
('Detective Nina Rao', 'Detective', 'Homicide'),
('Inspector Arjun Mehta', 'Inspector', 'Cyber Crime'),
('Sub-Inspector Kavya Nair', 'Sub-Inspector', 'Narcotics'),
('Detective Imran Sheikh', 'Detective', 'Robbery'),
('Officer Priya Sen', 'Constable', 'Forensics');

-- CASES
INSERT INTO Cases (Title, Status, StartDate, EndDate, LeadOfficerID) VALUES
('Bank Robbery at National Bank', 'Closed', '2024-01-10', '2024-02-15', 1),
('Online Investment Scam', 'Under Investigation', '2024-04-05', NULL, 2),
('Interstate Drug Bust', 'Open', '2025-05-01', NULL, 3),
('Jewelry Store Break-in', 'Closed', '2023-10-01', '2023-11-20', 4),
('College Exam Paper Leak', 'Open', '2025-06-12', NULL, 2);

-- SUSPECTS
INSERT INTO Suspects (Name, Age, Gender, CaseID, Arrested) VALUES
('Ravi Sharma', 35, 'Male', 1, TRUE),
('Anita Das', 28, 'Female', 2, FALSE),
('Kabir Ali', 40, 'Male', 3, TRUE),
('Mehul Joshi', 19, 'Male', 5, FALSE),
('Sunita Kapoor', 45, 'Female', 4, TRUE);

-- EVIDENCE
INSERT INTO Evidence (Description, CollectedDate, CaseID, UpdatedBy) VALUES
('Security camera footage showing masked suspect', '2024-01-12', 1, 1),
('Email headers from phishing attack', '2024-04-10', 2, 2),
('3kg heroin found in vehicle', '2025-05-05', 3, 3),
('Glass shard with fingerprint', '2023-10-04', 4, 4),
('Whatsapp chat logs from leaked exam group', '2025-06-15', 5, 2),
('Forensic lab report: matching blood sample', '2023-10-10', 4, 5);
