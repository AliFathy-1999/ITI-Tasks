-- 1.	Display all the employees Data.
-- select * from employee

-- 2.	Display the employee First name, last name, Salary and Department number.
-- select fname,lname,salary,dno from employee

-- 3.	Display all the projects names, locations and the department which is responsible about it.
-- select pname,plocation,dnum from project

-- 4.	If you know that the company policy is to pay an annual commission for each employee with specific percent equals 10% of his/her annual salary. Display each employee full name (Full name as one column) and his annual commission as ANNUAL COMM column (alias).
-- select CONCAT(employee.fname,' ',employee.lname) as fullname, 
-- (salary*12)*0.1 as "ANNUAL COMM"  from employee
 
--  5.	Display the employees Id, name who earns more than 1000 LE monthly.
-- select ssn,fname 
-- from employee
-- where salary>1000

-- 6.	Display the employees Id, name who earns more than 10000 LE annually.
-- select ssn,fname 
-- from employee
-- where salary*12>10000

-- 7.	Display the names and salaries of the female employees 
-- select fname,salary from employee
-- where sex='F'

-- 8.	Display each department id, name which managed by a manager with id equals 968574.
-- select dnum,dname
-- from departments
-- where mgrssn=968574

-- 9.	Display the IDs, names and locations of the pojects which controlled with department 10.
-- select pnumber,pname,plocation from project
-- where dnum=10