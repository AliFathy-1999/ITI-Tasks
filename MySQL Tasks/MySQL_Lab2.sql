//1 .Display all the details about employees with a salary between 8000 and 10000. 

select * from employee
where salary between 8000 and 10000;

//2. Update the reward of “Abdullah” to 1000.

update reward 
set reward.amount = 1000,
where reward.employee_ref_id = (select id from employee where first_name='Abdullah');

//3. Display the average salary by department in ascending order of salary.

SELECT avg(salary),department
from employee
group by department
order by salary asc;

//4. Display the number of employees grouped by date of joining.
select count(id) from employee
group by joining_date

//5. Display the IDs of employees who did not receive rewards with/without using subqueries.

//with subquery
select id from employee
where id not in (select employee_ref_id from reward);

//without subquery
select id 
from employee left join reward
on employee.id = reward.employee_ref_id
where reward.employee_ref_id is null;

//6. Display the highest 3 salaries.

select Max(salary)
from employee
order by salary desc;
limit 3;

//7. Display data about employee who has the 3rd highest salary.
select Max(salary)
from employee
order by salary desc;
limit 3 offset 2;

//8. Write an SQL query to print details of employees whose FIRST_NAME ends with ‘d’ and contains six alphabets.

select * from employee
where First_name like '_____d';
//OR like '%d' and length(First_name)==6;

//9.Create index on first_name column

create index First_name_index on empolyee(first_name);