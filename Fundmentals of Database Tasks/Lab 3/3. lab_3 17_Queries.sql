-- 1.	Display the Department id, name and id and the name of its manager.

-- select d.dnum, d.dname, e.fname || ' '  || e.lname as "Manger Name"
-- from departments d,employee e
-- where e.ssn=d.MGRSSN

-- 2.	Display the name of the departments and the name of the projects under its control.

-- select d.dname,p.pname
-- from departments d,project p
-- where p.dnum=d.dnum

-- 3.	Display the full data about all the dependence associated with the name of the employee they depend on him/her.

-- select d.ESSN,d.Dependent_name,d.Sex,d.Bdate from dependent d left outer join employee e 
-- on d.essn = e.ssn

-- 4.	Display (Using Union Function)
-- select Dependent_name,sex from dependent where sex='F' and essn in (select ssn from employee where sex='F' )
--  union
--  select Dependent_name,sex from dependent where sex='M' and essn in (select ssn from employee where sex='M' )

-- 5.	Display the Id, name and location of the projects in Cairo or Alex city.
-- select pnumber, pname, plocation 
-- from project
-- where City = 'Alex' or City='Cairo'

-- 6.	Display the Projects full data of the projects with a name starts with "a" letter.

-- select * from project where upper(pname) like upper('a%')

-- 7.	display all the employees in department 30 whose salary from 1000 to 2000 LE monthly
-- select * 
-- from employee 
-- where dno=30 and salary between 1000 And 2000

-- 8.	Retrieve the names of all employees in department 10 who works more than or equal 10 hours per week on "AL Rabwah" project.
-- SELECT e.fname 
-- from employee e , works_for w, project p
-- where w.essn = e.ssn and w.pno = p.pnumber and p.dnum = 10 and p.pname = 'Al Rawdah' and w.hours >= 10;
-- 9.	Find the names of the employees who directly supervised with Kamel Mohamed.

-- select e.fname || ' ' ||e.lname as pEmployees
-- from employee e
-- where  superssn in (select ssn from employee where fname='Kamel' and lname='Mohamed')

-- 10.	For each project, list the project name and the total hours per week (for all employees) spent on that project.

-- select p.pname ,sum(hours)
-- from works_for  LEFT OUTER JOIN  project p
-- on pno=p.pnumber
-- group by p.pnumber

-- 11.	Retrieve the names of all employees and the names of the projects they are working on, sorted by the project name.

-- select e.fname || ' ' || e.lname as Full_name , pname , pnumber
-- from employee e, works_for w left outer join project  
-- on w.pno=pnumber
-- where w.essn = e.ssn
-- order by pname 

-- 12.	Display the data of the department which has the smallest employee ID over all employees' ID.

-- select dnum,dname,mgrssn,"MGRStart Date"
-- from departments left outer join employee 
-- on dnum = dno
-- where ssn = (select min(ssn) from employee)

-- 13.	For each department, retrieve the department name and the maximum, minimum and average salary of its employees.

-- select dname,max(salary),min(salary),avg(salary)
-- from departments left outer join employee
-- on dno = dnum
-- group  by dnum
-- order by dname

-- 14.	List the last name of all managers who have no dependents.

-- select mgrssn,lname
-- from departments left outer join employee 
-- on mgrssn=ssn
-- Where ssn NOT in  (select essn from dependent)

-- 15.	For each department-- if its average salary is less than the average salary of all employees-- display its number, name and number of its employees.

select d.dnum, d.dname , count(e.ssn),avg(e.salary)
from employee e , departments d
where d.dnum=e.dno
group by d.dnum
having  (select avg(salary) from employee) > avg(e.salary)
order by d.dname;

-- 16.	Retrieve a list of employees and the projects they are working on ordered by department and within each department, ordered alphabetically by last name, first name.
-- select e.fname || ' ' || e.lname as Full_name ,p.dnum,p.pname
-- from works_for w left outer join employee e
-- on w.essn = e.ssn
-- inner join project p
-- on p.pnumber=w.pno
-- order by p.dnum , e.lname , e.fname;
-- 17.	For each project located in Cairo City , find the project number, the controlling department name ,the department manager last name ,address and birthdate.

-- select p.pnumber,d.dname , e.lname,e.address, e.BDATE
-- from departments d left outer join project p 
-- on d.dnum = p.dnum
-- inner join employee e
-- on e.dno=d.dnum
-- where p.City='Cairo'  