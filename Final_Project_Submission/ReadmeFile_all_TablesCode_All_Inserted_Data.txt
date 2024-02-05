All tables and inserted data in the hospital management system


create database Hospital_Management_System;
use Hospital_Management_System;

create table PatientDetails(
PatientID int primary Key not null,
FirstName varchar(50) not null,
LastName varchar(50) not null,
DateofBirth date not null,
Gender char(1) not null,
ContactNumber varchar(20) not null,
Email varchar(50) not null,
Address varchar(100) not null
);


create table DoctorDetails(

DoctorID int primary key not null,
FirstName varchar(50) not null,
LastName varchar(50) not null,
specialization varchar(50) not null,
ContactNumber varchar(20) not null,
Email varchar(50) not null

);


create table Department(
DepartmentID int primary key not null,
DepartmentName varchar(100)
);

create table Appointment(

AppointmentID int primary key not null,
PatientID int,
DoctorID int,
AppointmentDateTime datetime not null,
Status varchar(50) not null,
foreign key(PatientID) references PatientDetails(PatientID),
foreign key(DoctorID) references  DoctorDetails(DoctorID)
);

create table Visit(
VisitID int primary key not null,
PatientID int,
DoctorID int,
VisitDateTime datetime not null,
Diagnosis varchar(50) not null,
Prescription varchar(50) not null,
foreign key(PatientID) references PatientDetails(PatientID),
foreign key(DoctorID) references DoctorDetails(DoctorID)
);

-- Renamed table 'visit' to 'PatientVisitDetails'
rename table  Visit to  PatientVisitDetails;

create table StaffDetails(

StaffID int primary key not null,
FirstName varchar(50) not null,
LastName varchar(50) not null,
StaffPosition varchar(50) not null,
ContactNumber varchar(20) not null,
Email varchar(50) not null,
DepartmentID int,
foreign key(DepartmentID) references Department(DepartmentID)

);

create table PatientAdmission(

AdmissionID int primary key not null,
PatientID int,
AdmissionDate date not null,
DischargeDate date not null,
RoomNumber varchar(50) not null,
foreign key(PatientID) references PatientDetails(PatientID)
);

create table LabTest(

TestID int primary key not null,
PatientID int not null,
DoctorID int not null,
TestName varchar(255) not null,
TestDate date not null,
TestResult varchar(255) not null,
foreign key(PatientID) references PatientDetails(PatientID),
foreign key(DoctorID) references DoctorDetails(DoctorID)
);

create table PatientBilling(
BillID int primary key not null,
PatientID int,
VisitID int,
TotalAmount varchar(255) not null,
PaymentStatus varchar(255) not null,
MedicalInsuranceValidity varchar(50),
foreign key(PatientID) references PatientDetails(PatientID),
foreign key(VisitID) references PatientVisitDetails(VisitID)
);

create table MedicationForpatients(

MedicationID int primary key not null,
VisitID int,
MedicationName varchar(255) not null,
DosageLevel varchar(255) not null,
foreign key(VisitID) references PatientVisitDetails(VisitID)
);




use Hospital_Management_System;
-- Inserting 10 records with Indian names into PatientDetails table

INSERT INTO PatientDetails (PatientID, FirstName, LastName, DateofBirth, Gender, ContactNumber, Email, Address)
VALUES
(101, 'Aarav', 'Gupta', '1990-05-15', 'M', '9876543210', 'aarav.gupta@example.com', '123 Main Street, pune, maharashtra, Pincode'),
(102, 'Aisha', 'Sharma', '1985-08-22', 'F', '8765432109', 'aisha.sharma@example.com', '456 Park Avenue, mumbai, maharashtra, Pincode'),
(103, 'Aditya', 'Patel', '1992-02-10', 'M', '7654321098', 'aditya.patel@example.com', '789 Oak Road, nasik, maharashtra, Pincode'),
(104, 'Ananya', 'Verma', '1988-11-30', 'F', '6543210987', 'ananya.verma@example.com', '567 Pine Lane, pune, maharashtra, Pincode'),
(105, 'Arjun', 'Singh', '1995-07-18', 'M', '5432109876', 'arjun.singh@example.com', '890 Cedar Street, mumbai, maharashtra, Pincode'),
(106, 'Neha', 'Gupta', '1991-04-25', 'F', '4321098765', 'neha.gupta@example.com', '234 Birch Avenue, pune, maharashtra, Pincode'),
(107, 'Vivek', 'Yadav', '1987-09-03', 'M', '3210987654', 'vivek.yadav@example.com', '901 Maple Drive, nasik, maharashtra, Pincode'),
(108, 'Riya', 'Chopra', '1994-12-12', 'F', '2109876543', 'riya.chopra@example.com', '678 Elm Street, pune, maharashtra, Pincode'),
(109, 'Rahul', 'Mishra', '1986-06-20', 'M', '1098765432', 'rahul.mishra@example.com', '345 Walnut Lane, pune, maharashtra, Pincode'),
(110, 'Aarti', 'Shukla', '1993-03-08', 'F', '9876543210', 'aarti.shukla@example.com', '123 Pinecrest Avenue, mumbai, maharashtra,  Pincode');

-- Inserting records with Indian names into DoctorDetails table

INSERT INTO DoctorDetails (DoctorID, FirstName, LastName, specialization, ContactNumber, Email)
VALUES
(11, 'Rajesh', 'Kumar', 'Cardiology', '123-456-7890', 'rajesh.kumar@example.com'),
(12, 'Priya', 'Sharma', 'Pediatrics', '987-654-3210', 'priya.sharma@example.com'),
(13, 'Amit', 'Patel', 'Orthopedics', '456-789-0123', 'amit.patel@example.com'),
(14, 'Anjali', 'Verma', 'Dermatology', '789-012-3456', 'anjali.verma@example.com'),
(15, 'Ravi', 'Singh', 'Ophthalmology', '012-345-6789', 'ravi.singh@example.com'),
(16, 'Neha', 'Gupta', 'Neurology', '234-567-8901', 'neha.gupta@example.com'),
(17, 'Vikram', 'Yadav', 'Gastroenterology', '567-890-1234', 'vikram.yadav@example.com'),
(18, 'Sunita', 'Chopra', 'Endocrinology', '890-123-4567', 'sunita.chopra@example.com'),
(19, 'Rahul', 'Mishra', 'Urology', '345-678-9012', 'rahul.mishra@example.com'),
(20, 'Aarti', 'Shukla', 'Pulmonology', '678-901-2345', 'aarti.shukla@example.com');



-- Inserting 10 records into Department table

INSERT INTO Department (DepartmentID, DepartmentName)
VALUES
(1, 'Cardiology'),
(2, 'Pediatrics'),
(3, 'Orthopedics'),
(4, 'Dermatology'),
(5, 'Ophthalmology'),
(6, 'Neurology'),
(7, 'Gastroenterology'),
(8, 'Endocrinology'),
(9, 'Urology'),
(10, 'Pulmonology');




-- Inserting 10 records into Appointment table

select * from Appointment;

SET SQL_SAFE_UPDATES = 0;
delete from Appointment;


-- Inserting 10 records into Appointment table

INSERT INTO Appointment (AppointmentID, PatientID, DoctorID, AppointmentDateTime, Status)
VALUES
(1, 101, 11, '2024-02-10 10:00:00', 'Scheduled'),
(2, 102, 12, '2024-02-15 11:30:00', 'Completed'),
(3, 103, 13, '2024-02-20 14:45:00', 'Scheduled'),
(4, 104, 14, '2024-02-25 16:00:00', 'Cancelled'),
(5, 105, 15, '2024-03-01 09:15:00', 'Scheduled'),
(6, 106, 16, '2024-03-05 12:30:00', 'Completed'),
(7, 107, 17, '2024-03-10 15:45:00', 'Scheduled'),
(8, 108, 18, '2024-03-15 18:00:00', 'Scheduled'),
(9, 109, 19, '2024-03-20 09:30:00', 'Scheduled'),
(10, 110, 20, '2024-03-25 11:45:00', 'Scheduled');

select * from PatientDetails;
select * from DoctorDetails;
select * from Appointment;

-- Inserting 10 records into Visit table

INSERT INTO PatientVisitDetails (VisitID, PatientID, DoctorID, VisitDateTime, Diagnosis, Prescription)
VALUES
(1, 101, 11, '2024-02-10 10:30:00', 'Fever', 'Paracetamol'),
(2, 102, 12, '2024-02-15 11:45:00', 'Cough', 'Cough syrup'),
(3, 103, 13, '2024-02-20 14:00:00', 'Sprained ankle', 'Rest and pain relievers'),
(4, 104, 14, '2024-02-25 16:30:00', 'Skin rash', 'Topical cream'),
(5, 105, 15, '2024-03-01 09:45:00', 'Eye infection', 'Antibiotic eye drops'),
(6, 106, 16, '2024-03-05 12:15:00', 'Headache', 'Painkillers'),
(7, 107, 17, '2024-03-10 15:30:00', 'Digestive issues', 'Antacids'),
(8, 108, 18, '2024-03-15 18:45:00', 'Thyroid disorder', 'Medication'),
(9, 109, 19, '2024-03-20 09:15:00', 'Kidney stones', 'Fluids and pain relief'),
(10, 110, 20, '2024-03-25 11:30:00', 'Respiratory infection', 'Antibiotics');



INSERT INTO StaffDetails (StaffID, FirstName, LastName, StaffPosition, ContactNumber, Email, DepartmentID)
VALUES
(1, 'Amit', 'Sharma', 'Nurse', '9876543210', 'amit.sharma@example.com', 1),
(2, 'Priya', 'Verma', 'Doctor', '8765432109', 'priya.verma@example.com', 2),
(3, 'Rajesh', 'Yadav', 'Receptionist', '7654321098', 'rajesh.yadav@example.com', 3),
(4, 'Neha', 'Singh', 'Technician', '6543210987', 'neha.singh@example.com', 4),
(5, 'Vikram', 'Chopra', 'Administrator', '5432109876', 'vikram.chopra@example.com', 5),
(6, 'Anjali', 'Mishra', 'Nurse', '4321098765', 'anjali.mishra@example.com', 1),
(7, 'Rahul', 'Kumar', 'Doctor', '3210987654', 'rahul.kumar@example.com', 2),
(8, 'Sunita', 'Gupta', 'Receptionist', '2109876543', 'sunita.gupta@example.com', 3),
(9, 'Amit', 'Verma', 'Technician', '1098765432', 'amit.verma@example.com', 4),
(10, 'Sneha', 'Patel', 'Administrator', '9876543210', 'sneha.patel@example.com', 5);


INSERT INTO PatientAdmission (AdmissionID, PatientID, AdmissionDate, DischargeDate, RoomNumber)
VALUES
(1, 101, '2024-02-10', '2024-02-15', '101A'),
(2, 102, '2024-02-15', '2024-02-20', '102B'),
(3, 103, '2024-02-20', '2024-02-25', '103C'),
(4, 104, '2024-02-25', '2024-03-01', '104D'),
(5, 105, '2024-03-01', '2024-03-05', '105E'),
(6, 106, '2024-03-05', '2024-03-10', '106F'),
(7, 107, '2024-03-10', '2024-03-15', '107G'),
(8, 108, '2024-03-15', '2024-03-20', '108H'),
(9, 109, '2024-03-20', '2024-03-25', '109I'),
(10, 110, '2024-03-25', '2024-03-30', '110J');


-- Inserting 10 records into LabTest table

INSERT INTO LabTest (TestID, PatientID, DoctorID, TestName, TestDate, TestResult)
VALUES
(1, 101, 11, 'Blood Test', '2024-01-10', 'Normal'),
(2, 102, 12, 'X-ray', '2024-01-15', 'No abnormalities detected'),
(3, 103, 13, 'MRI Scan', '2024-01-20', 'Minor injury detected'),
(4, 104, 14, 'Skin Biopsy', '2024-01-25', 'Inconclusive'),
(5, 105, 15, 'Eye Exam', '2024-02-01', 'Prescription needed'),
(6, 106, 16, 'EEG', '2024-02-05', 'Normal brain activity'),
(7, 107, 17, 'Endoscopy', '2024-02-10', 'Digestive issues detected'),
(8, 108, 18, 'Thyroid Panel', '2024-02-15', 'Abnormal thyroid levels'),
(9, 109, 19, 'Kidney Function Test', '2024-02-20', 'Normal'),
(10, 110, 20, 'Pulmonary Function Test', '2024-02-25', 'Normal lung function');


INSERT INTO PatientBilling (BillID, PatientID, VisitID, TotalAmount, PaymentStatus)
VALUES
(1, 101, 1, '1500.00 INR', 'Paid'),
(2, 102, 2, '2000.00 INR', 'Unpaid'),
(3, 103, 3, '1800.50 INR', 'Paid'),
(4, 104, 4, '2500.75 INR', 'Unpaid'),
(5, 105, 5, '1200.25 INR', 'Paid'),
(6, 106, 6, '3000.00 INR', 'Unpaid'),
(7, 107, 7, '1600.75 INR', 'Paid'),
(8, 108, 8, '2100.50 INR', 'Unpaid'),
(9, 109, 9, '1900.25 INR', 'Paid'),
(10, 110, 10, '2800.00 INR', 'Unpaid');


INSERT INTO MedicationForPatients (MedicationID, VisitID, MedicationName, DosageLevel)
VALUES
(322, 1, 'Paracetamol', '500 mg'),
(223, 2, 'Ibuprofen', '200 mg'),
(321, 3, 'Amoxicillin', '250 mg'),
(478, 4, 'Aspirin', '100 mg'),
(544, 5, 'Ciprofloxacin', '500 mg'),
(633, 6, 'Lisinopril', '10 mg'),
(73, 7, 'Metformin', '850 mg'),
(833, 8, 'Atorvastatin', '20 mg'),
(91, 9, 'Omeprazole', '40 mg'),
(120, 10, 'Diazepam', '5 mg');




//stored procedure for identifying duplicate records
-- Create a stored procedure to insert a patient record
DELIMITER //
CREATE PROCEDURE InsertPatientRecord2 (
    IN p_PatientID INT,
    IN p_FirstName VARCHAR(50),
    IN p_LastName VARCHAR(50),
    IN p_DateOfBirth DATE,
    IN p_Gender CHAR(1),
    IN p_ContactNumber VARCHAR(20),
    IN p_Email VARCHAR(50),
    IN p_Address VARCHAR(100)
)
BEGIN
    DECLARE duplicate_error BOOLEAN DEFAULT FALSE;

    -- Declare a handler for the duplicate key error
    DECLARE CONTINUE HANDLER FOR SQLSTATE '23000'
        SET duplicate_error = TRUE;

    BEGIN
        -- Your INSERT statement here
        INSERT INTO PatientDetails (PatientID, FirstName, LastName, DateofBirth, Gender, ContactNumber, Email, Address)
        VALUES (p_PatientID, p_FirstName, p_LastName, p_DateOfBirth, p_Gender, p_ContactNumber, p_Email, p_Address);
        
        SELECT 'Record inserted successfully.' AS Message;
    END;

    IF duplicate_error THEN
        SELECT 'Error: Duplicate record. This patient is already in the records.' AS Message;
        SET duplicate_error = FALSE; -- Reset the flag to allow further processing
        -- You can add additional handling or simply return without inserting the record into the table.
    END IF;

    -- Check for different PatientID with the same details (duplicate details)
    IF EXISTS (
        SELECT 1
        FROM PatientDetails
        WHERE PatientID <> p_PatientID
          AND (FirstName = p_FirstName
               AND LastName = p_LastName
               AND ContactNumber = p_ContactNumber
               AND Email = p_Email
               AND Address = p_Address)
    ) THEN
        SELECT 'Error: PatientID is different, but details are already associated with another record.' AS Message;
    END IF;

END //
DELIMITER ;

CALL InsertPatientRecord2(112, 'Omkar', 'Kshirsagar', '2002-07-23', 'M', '9876543221', 'omkar.kshirsagarexample.com', '123 suyog Street, Pune, Maharashtra, Pincode');

//Create a stored procedure to insert a staff record
DELIMITER //
CREATE PROCEDURE InsertStaffRecord (
    IN p_StaffID INT,
    IN p_FirstName VARCHAR(50),
    IN p_LastName VARCHAR(50),
    IN p_StaffPosition VARCHAR(50),
    IN p_ContactNumber VARCHAR(20),
    IN p_Email VARCHAR(50),
    IN p_DepartmentID INT
)
BEGIN
    DECLARE duplicate_error BOOLEAN DEFAULT FALSE;

    -- Declare a handler for the duplicate key error
    DECLARE CONTINUE HANDLER FOR SQLSTATE '23000'
        SET duplicate_error = TRUE;

    BEGIN
        -- Your INSERT statement here
        INSERT INTO StaffDetails (StaffID, FirstName, LastName, StaffPosition, ContactNumber, Email, DepartmentID)
        VALUES (p_StaffID, p_FirstName, p_LastName, p_StaffPosition, p_ContactNumber, p_Email, p_DepartmentID);
        
        SELECT 'Record inserted successfully.' AS Message;
    END;

    IF duplicate_error THEN
        SELECT 'Error: Duplicate record. This staff member is already in the records.' AS Message;
        SET duplicate_error = FALSE; -- Reset the flag to allow further processing
        -- You can add additional handling or simply return without inserting the record into the table.
    END IF;

    -- Check for same Name and StaffPosition with different StaffID
    IF EXISTS (
        SELECT 1
        FROM StaffDetails
        WHERE StaffID <> p_StaffID
          AND (FirstName = p_FirstName
               AND LastName = p_LastName
               AND StaffPosition = p_StaffPosition)
    ) THEN
        SELECT 'Error: StaffID is different, but Name and StaffPosition are already associated with another record.' AS Message;
    END IF;

END //
DELIMITER ;
use Hospital_Management_System;
-- Example usage of the stored procedure to insert a staff record 
CALL InsertPatientRecord2(101, 'Aarav', 'Gupta', '1990-05-15', 'M', '9876543210', 'aarav.gupta@example.com', '123 Main Street, pune, maharashtra, Pincode');
CALL InsertStaffRecord(1, 'Amit', 'Sharma', 'Nurse', '9876543210', 'amit.sharma@example.com', 1);




//left join operation for getting require patient details
SELECT
    p.PatientID,
    p.FirstName AS PatientFirstName,
    p.LastName AS PatientLastName,
    p.DateofBirth,
    p.Gender,
    p.ContactNumber AS PatientContactNumber,
    p.Email AS PatientEmail,
    p.Address AS PatientAddress,
    d.DoctorID,
    d.FirstName AS DoctorFirstName,
    d.LastName AS DoctorLastName,
    d.specialization,
    d.ContactNumber AS DoctorContactNumber,
    d.Email AS DoctorEmail,
    a.AppointmentID,
    a.AppointmentDateTime,
    a.Status AS AppointmentStatus,
    lt.TestID,
    lt.TestName,
    lt.TestDate,
    lt.TestResult
FROM
    PatientDetails p
JOIN
    Appointment a ON p.PatientID = a.PatientID
JOIN
    DoctorDetails d ON a.DoctorID = d.DoctorID
LEFT JOIN
    LabTest lt ON p.PatientID = lt.PatientID AND d.DoctorID = lt.DoctorID;


SELECT
    pb.BillID,
    pb.PatientID,
    pd.FirstName AS PatientFirstName,
    pd.LastName AS PatientLastName,
    pd.DateofBirth,
    pv.VisitID,
    pv.VisitDateTime,
    pv.Diagnosis,
    pv.Prescription,
    lt.TestID,
    lt.TestName,
    lt.TestDate,
    lt.TestResult,
    pb.TotalAmount,
    pb.PaymentStatus
FROM
    PatientBilling pb
JOIN
    PatientDetails pd ON pb.PatientID = pd.PatientID
JOIN
    PatientVisitDetails pv ON pb.VisitID = pv.VisitID
LEFT JOIN
    LabTest lt ON pd.PatientID = lt.PatientID AND pv.DoctorID = lt.DoctorID
WHERE
    pb.PatientID = 101;


//created right join operation for appointment and other details
SELECT
    pb.BillID,
    pb.PatientID,
    pd.FirstName AS PatientFirstName,
    pd.LastName AS PatientLastName,
    pd.DateofBirth,
    pv.VisitID,
    pv.VisitDateTime,
    pv.Diagnosis,
    pv.Prescription,
    lt.TestID,
    lt.TestName,
    lt.TestDate,
    lt.TestResult,
    pb.TotalAmount,
    pb.PaymentStatus
FROM
    PatientBilling pb
JOIN
    PatientDetails pd ON pb.PatientID = pd.PatientID
JOIN
    PatientVisitDetails pv ON pb.VisitID = pv.VisitID
LEFT JOIN
    LabTest lt ON pd.PatientID = lt.PatientID AND pv.DoctorID = lt.DoctorID
WHERE
    pb.PatientID = 101;

SELECT
    A.AppointmentID,
    A.PatientID,
    A.DoctorID,
    A.AppointmentDateTime,
    A.Status,
    P.FirstName,
    P.LastName,
    P.DateofBirth,
    P.Gender,
    P.ContactNumber,
    P.Email,
    P.Address
FROM
    Appointment A
RIGHT JOIN
    PatientDetails P ON A.PatientID = P.PatientID;


// Created a view to combine PatientDetails and PatientBilling
CREATE VIEW PatientDetailsWithBilling AS
SELECT
    pd.PatientID,
    pd.FirstName,
    pd.LastName,
    pd.DateofBirth,
    pd.Gender,
    pd.ContactNumber,
    pd.Email,
    pd.Address,
    pb.BillID,
    pb.TotalAmount,
    pb.PaymentStatus
FROM
    PatientDetails pd
JOIN
    PatientBilling pb ON pd.PatientID = pb.PatientID;



//creation of indexing for better optimization
    
    -- Adding indexes to foreign key columns
CREATE INDEX idx_PatientDetails_PatientID ON PatientDetails(PatientID);
CREATE INDEX idx_DoctorDetails_DoctorID ON DoctorDetails(DoctorID);

CREATE INDEX idx_Appointment_PatientID ON Appointment(PatientID);
CREATE INDEX idx_Appointment_DoctorID ON Appointment(DoctorID);

-- Adding index to AppointmentDateTime for optimizing search conditions
CREATE INDEX idx_Appointment_AppointmentDateTime ON Appointment(AppointmentDateTime);




//Created a stored procedure for optimizing bill generation
DELIMITER //

CREATE PROCEDURE GenerateBill(IN p_VisitID INT)
BEGIN
    DECLARE totalAmount DECIMAL(10, 2);

    -- Calculated total amount for services
    SELECT 
        SUM(ServiceCost) INTO totalAmount
    FROM (
        SELECT
            CASE
                WHEN m.MedicationName = 'Painkillers' THEN 10.00
                WHEN m.MedicationName = 'Antibiotics' THEN 15.00
                ELSE 0.00
            END AS ServiceCost
        FROM
            MedicationForpatients m
        WHERE
            m.VisitID = p_VisitID
    ) AS Services;

    -- Update the PatientBilling table with the calculated total amount
    UPDATE PatientBilling
    SET TotalAmount = totalAmount
    WHERE VisitID = p_VisitID;

END //

DELIMITER ;


CALL GenerateBill(3);// -- it calls visitid and updates data in PatientBilling table
SELECT * FROM PatientBilling WHERE VisitID = 3;



//altered table for medical insaurance expiration checking
ALTER TABLE PatientBilling
ADD COLUMN MedicalInsuranceValidity varchar(50);

UPDATE PatientBilling
SET MedicalInsuranceValidity =
    CASE
        WHEN VisitID IN (1, 3, 5, 7, 9) THEN 'Valid'
        ELSE 'Expired'
    END;
    
    select * from PatientBilling;
    
    SET SQL_SAFE_UPDATES = 0;


desc PatientBilling;

//Trigger to check insurance limit before inserting or updating a record in PatientBilling
DELIMITER //

CREATE TRIGGER BeforeInsertOrUpdatePatientBilling
BEFORE INSERT OR UPDATE ON PatientBilling
FOR EACH ROW
BEGIN
    DECLARE insuranceRemaining DECIMAL(10, 2);

    -- Calculate remaining insurance limit
    SELECT PatientDetails.InsuranceLimit - COALESCE(SUM(TotalAmount), 0) INTO insuranceRemaining
    FROM PatientDetails
    LEFT JOIN PatientBilling ON PatientDetails.PatientID = PatientBilling.PatientID
    WHERE PatientDetails.PatientID = NEW.PatientID;

    -- Check if the insurance limit is sufficient
    IF insuranceRemaining >= NEW.TotalAmount THEN
        -- Allow the insertion or update
        SET NEW.MedicalInsuranceValidity = 'Valid';
    ELSE
        -- Set MedicalInsuranceValidity to 'Expired'
        SET NEW.MedicalInsuranceValidity = 'Expired';
        -- You can also signal an error if needed
        -- SIGNAL SQLSTATE '45000'
        -- SET MESSAGE_TEXT = 'Insurance limit exceeded. Cannot insert/update the record.';
    END IF;
END //

DELIMITER ;

