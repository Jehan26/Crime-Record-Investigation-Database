-- View: OfficerWorkload
CREATE VIEW OfficerWorkload AS
SELECT o.OfficerID, o.Name, COUNT(c.CaseID) AS Total_Cases
FROM Officers o
LEFT JOIN Cases c ON o.OfficerID = c.LeadOfficerID
GROUP BY o.OfficerID;

-- View: UnresolvedCases
CREATE VIEW UnresolvedCases AS
SELECT * FROM Cases WHERE Status IN ('Open', 'Under Investigation');
