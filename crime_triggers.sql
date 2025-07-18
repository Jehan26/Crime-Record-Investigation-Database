-- Trigger to log evidence updates

CREATE TABLE EvidenceUpdatesLog (
    LogID SERIAL PRIMARY KEY,
    EvidenceID INT,
    UpdatedOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedBy INT
);

CREATE OR REPLACE FUNCTION log_evidence_update()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO EvidenceUpdatesLog (EvidenceID, UpdatedBy)
    VALUES (NEW.EvidenceID, NEW.UpdatedBy);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_evidence_update
AFTER UPDATE ON Evidence
FOR EACH ROW
EXECUTE FUNCTION log_evidence_update();
