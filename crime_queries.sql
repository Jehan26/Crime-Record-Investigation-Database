-- View all open cases
SELECT * FROM Cases WHERE Status = 'Open';

-- Count of cases by status
SELECT Status, COUNT(*) AS Total FROM Cases GROUP BY Status;

-- Officer workload (how many cases each officer leads)
SELECT o.Name, COUNT(c.CaseID) AS Total_Cases
FROM Officers o
LEFT JOIN Cases c ON o.OfficerID = c.LeadOfficerID
GROUP BY o.Name;

-- Suspects not arrested
SELECT Name, CaseID FROM Suspects WHERE Arrested = FALSE;

-- Join cases and evidence
SELECT c.Title, e.Description, e.CollectedDate
FROM Cases c
JOIN Evidence e ON c.CaseID = e.CaseID;
