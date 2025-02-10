 localhost:3306 ssl  22r  SQL > show databases;
+--------------------+
| Database           |
+--------------------+
| 22r                |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
5 rows in set (0.0016 sec)
 MySQL  localhost:3306 ssl  22r  SQL > use 22r
Default schema set to `22r`.
Fetching global names, object names from `22r` for auto-completion... Press ^C to stop.
 MySQL  localhost:3306 ssl  22r  SQL > show tables;
+---------------+
| Tables_in_22r |
+---------------+
| student       |
+---------------+
1 row in set (0.0020 sec)
 MySQL  localhost:3306 ssl  22r  SQL > desc student;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| sid      | int         | YES  |     | NULL    |       |
| sname    | varchar(10) | YES  |     | NULL    |       |
| sorg     | varchar(70) | YES  |     | NULL    |       |
| smail    | varchar(20) | YES  |     | NULL    |       |
| saddress | varchar(20) | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+
5 rows in set (0.0022 sec)
 MySQL  localhost:3306 ssl  22r  SQL > alter table student
                                    -> add column spn int first;
Query OK, 0 rows affected (0.0745 sec)

Records: 0  Duplicates: 0  Warnings: 0
 MySQL  localhost:3306 ssl  22r  SQL > desc student;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| spn      | int         | YES  |     | NULL    |       |
| sid      | int         | YES  |     | NULL    |       |
| sname    | varchar(10) | YES  |     | NULL    |       |
| sorg     | varchar(70) | YES  |     | NULL    |       |
| smail    | varchar(20) | YES  |     | NULL    |       |
| saddress | varchar(20) | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+
6 rows in set (0.0024 sec)
 MySQL  localhost:3306 ssl  22r  SQL > alter table student add column slocation varchar(56) last;
ERROR: 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'last' at line 1
 MySQL  localhost:3306 ssl  22r  SQL > ^C
 MySQL  localhost:3306 ssl  22r  SQL > alter table student
                                    -> modify column smail varchar(40);
Query OK, 0 rows affected (0.0294 sec)

Records: 0  Duplicates: 0  Warnings: 0
 MySQL  localhost:3306 ssl  22r  SQL > desc student;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| spn      | int         | YES  |     | NULL    |       |
| sid      | int         | YES  |     | NULL    |       |
| sname    | varchar(10) | YES  |     | NULL    |       |
| sorg     | varchar(70) | YES  |     | NULL    |       |
| smail    | varchar(40) | YES  |     | NULL    |       |
| saddress | varchar(20) | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+
6 rows in set (0.0023 sec)
 MySQL  localhost:3306 ssl  22r  SQL > alter table student
                                    -> rename to emp;
Query OK, 0 rows affected (0.0400 sec)
 MySQL  localhost:3306 ssl  22r  SQL > desc emp;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| spn      | int         | YES  |     | NULL    |       |
| sid      | int         | YES  |     | NULL    |       |
| sname    | varchar(10) | YES  |     | NULL    |       |
| sorg     | varchar(70) | YES  |     | NULL    |       |
| smail    | varchar(40) | YES  |     | NULL    |       |
| saddress | varchar(20) | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+
6 rows in set (0.0028 sec)
 MySQL  localhost:3306 ssl  22r  SQL > alter table emp
                                    -> drop column sorg;
Query OK, 0 rows affected (0.1181 sec)

Records: 0  Duplicates: 0  Warnings: 0
 MySQL  localhost:3306 ssl  22r  SQL > desc emp;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| spn      | int         | YES  |     | NULL    |       |
| sid      | int         | YES  |     | NULL    |       |
| sname    | varchar(10) | YES  |     | NULL    |       |
| smail    | varchar(40) | YES  |     | NULL    |       |
| saddress | varchar(20) | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+
5 rows in set (0.0023 sec)
 MySQL  localhost:3306 ssl  22r  SQL > create database 21r;
Query OK, 1 row affected (0.0225 sec)
 MySQL  localhost:3306 ssl  22r  SQL > show databases;
+--------------------+
| Database           |
+--------------------+
| 21r                |
| 22r                |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
6 rows in set (0.0015 sec)
 MySQL  localhost:3306 ssl  22r  SQL > drop database 21r;
Query OK, 0 rows affected (0.0291 sec)
 MySQL  localhost:3306 ssl  22r  SQL > show databases;
+--------------------+
| Database           |
+--------------------+
| 22r                |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
5 rows in set (0.0016 sec)
 MySQL  localhost:3306 ssl  22r  SQL > use 22r
Default schema set to `22r`.
Fetching global names, object names from `22r` for auto-completion... Press ^C to stop.
 MySQL  localhost:3306 ssl  22r  SQL > show tables;
+---------------+
| Tables_in_22r |
+---------------+
| emp           |
+---------------+
1 row in set (0.0020 sec)
 MySQL  localhost:3306 ssl  22r  SQL > desc emp;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| spn      | int         | YES  |     | NULL    |       |
| sid      | int         | YES  |     | NULL    |       |
| sname    | varchar(10) | YES  |     | NULL    |       |
| smail    | varchar(40) | YES  |     | NULL    |       |
| saddress | varchar(20) | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+
5 rows in set (0.0023 sec)
 MySQL  localhost:3306 ssl  22r  SQL > alter table emp
                                    -> rename column saddress to sorg;
Query OK, 0 rows affected (0.0413 sec)

Records: 0  Duplicates: 0  Warnings: 0
 MySQL  localhost:3306 ssl  22r  SQL > desc emp;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| spn   | int         | YES  |     | NULL    |       |
| sid   | int         | YES  |     | NULL    |       |
| sname | varchar(10) | YES  |     | NULL    |       |
| smail | varchar(40) | YES  |     | NULL    |       |
| sorg  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
5 rows in set (0.0027 sec)
 MySQL  localhost:3306 ssl  22r  SQL > select sname
                                    -> from emp;
Empty set (0.0008 sec)
 MySQL  localhost:3306 ssl  22r  SQL > selectsname,smail
                                    -> from emp;
ERROR: 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'selectsname,smail
from emp' at line 1
 MySQL  localhost:3306 ssl  22r  SQL > select sname,smail from emp;
Empty set (0.0008 sec)
 MySQL  localhost:3306 ssl  22r  SQL > truncate table emp;
Query OK, 0 rows affected (0.0557 sec)
 MySQL  localhost:3306 ssl  22r  SQL > desc emp;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| spn   | int         | YES  |     | NULL    |       |
| sid   | int         | YES  |     | NULL    |       |
| sname | varchar(10) | YES  |     | NULL    |       |
| smail | varchar(40) | YES  |     | NULL    |       |
| sorg  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
5 rows in set (0.0030 sec)
 MySQL  localhost:3306 ssl  22r  SQL > select * from emp;
Empty set (0.0016 sec)
 MySQL  localhost:3306 ssl  22r  SQL > drop table student;
ERROR: 1051 (42S02): Unknown table '22r.student'
 MySQL  localhost:3306 ssl  22r  SQL > show databases;
+--------------------+
| Database           |
+--------------------+
| 22r                |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
5 rows in set (0.0015 sec)
 MySQL  localhost:3306 ssl  22r  SQL > use 22r;
Default schema set to `22r`.
Fetching global names, object names from `22r` for auto-completion... Press ^C to stop.
 MySQL  localhost:3306 ssl  22r  SQL > show tables;
+---------------+
| Tables_in_22r |
+---------------+
| emp           |
+---------------+
1 row in set (0.0021 sec)
 MySQL  localhost:3306 ssl  22r  SQL > insert into emp
                                    -> values(101,"rani","rani@gmail.com","1234");
ERROR: 1136 (21S01): Column count doesn't match value count at row 1
 MySQL  localhost:3306 ssl  22r  SQL > select * from emp;
Empty set (0.0008 sec)
 MySQL  localhost:3306 ssl  22r  SQL > show tables;
+---------------+
| Tables_in_22r |
+---------------+
| emp           |
+---------------+
1 row in set (0.0020 sec)
 MySQL  localhost:3306 ssl  22r  SQL > desc emp;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| spn   | int         | YES  |     | NULL    |       |
| sid   | int         | YES  |     | NULL    |       |
| sname | varchar(10) | YES  |     | NULL    |       |
| smail | varchar(40) | YES  |     | NULL    |       |
| sorg  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
5 rows in set (0.0023 sec)
 MySQL  localhost:3306 ssl  22r  SQL > insert into emp values(10145,104,"rani","rani@gmail.com","edrt");
Query OK, 1 row affected (0.0255 sec)
 MySQL  localhost:3306 ssl  22r  SQL > desc emp;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| spn   | int         | YES  |     | NULL    |       |
| sid   | int         | YES  |     | NULL    |       |
| sname | varchar(10) | YES  |     | NULL    |       |
| smail | varchar(40) | YES  |     | NULL    |       |
| sorg  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
5 rows in set (0.0021 sec)
 MySQL  localhost:3306 ssl  22r  SQL > select * from emp;
+-------+-----+-------+----------------+------+
| spn   | sid | sname | smail          | sorg |
+-------+-----+-------+----------------+------+
| 10145 | 104 | rani  | rani@gmail.com | edrt |
+-------+-----+-------+----------------+------+
1 row in set (0.0008 sec)
 MySQL  localhost:3306 ssl  22r  SQL > insert into emp(sid,sname) values("vijay","ajay");
ERROR: 1366 (HY000): Incorrect integer value: 'vijay' for column 'sid' at row 1
 MySQL  localhost:3306 ssl  22r  SQL > insert into emp (spn,sname)
                                    -> values (12334,"vamsi");
Query OK, 1 row affected (0.0060 sec)
 MySQL  localhost:3306 ssl  22r  SQL > select * from emp;
+-------+------+-------+----------------+------+
| spn   | sid  | sname | smail          | sorg |
+-------+------+-------+----------------+------+
| 10145 |  104 | rani  | rani@gmail.com | edrt |
| 12334 | NULL | vamsi | NULL           | NULL |
+-------+------+-------+----------------+------+
2 rows in set (0.0009 sec)
 MySQL  localhost:3306 ssl  22r  SQL > insert into emp (sname) values ("vijay","ajay");
ERROR: 1136 (21S01): Column count doesn't match value count at row 1
 MySQL  localhost:3306 ssl  22r  SQL > update emp
                                    -> set sname="laxmi"
                                    -> where sid=104;
Query OK, 1 row affected (0.0218 sec)

Rows matched: 1  Changed: 1  Warnings: 0
 MySQL  localhost:3306 ssl  22r  SQL > select * from emp;
+-------+------+-------+----------------+------+
| spn   | sid  | sname | smail          | sorg |
+-------+------+-------+----------------+------+
| 10145 |  104 | laxmi | rani@gmail.com | edrt |
| 12334 | NULL | vamsi | NULL           | NULL |
+-------+------+-------+----------------+------+
2 rows in set (0.0008 sec)
 MySQL  localhost:3306 ssl  22r  SQL > delete from emp;
Query OK, 2 rows affected (0.0206 sec)
 MySQL  localhost:3306 ssl  22r  SQL > delete from emp










 MySQL Shell 8.0.41

Copyright (c) 2016, 2025, Oracle and/or its affiliates.
Oracle is a registered trademark of Oracle Corporation and/or its affiliates.
Other names may be trademarks of their respective owners.

Type '\help' or '\?' for help; '\quit' to exit.
 MySQL  JS > \sql
Switching to SQL mode... Commands end with ;
 MySQL  SQL > \c root@localhost:3306
Creating a session to 'root@localhost:3306'
Fetching global names for auto-completion... Press ^C to stop.
Your MySQL connection id is 9
Server version: 8.0.41 MySQL Community Server - GPL
No default schema selected; type \use <schema> to set one.
 MySQL  localhost:3306 ssl  SQL > show databases;
+--------------------+
| Database           |
+--------------------+
| 22_r               |
| 22r                |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
6 rows in set (0.0045 sec)
 MySQL  localhost:3306 ssl  SQL > use 22_r;
Default schema set to `22_r`.
Fetching global names, object names from `22_r` for auto-completion... Press ^C to stop.
 MySQL  localhost:3306 ssl  22_r  SQL > show tables;
+----------------+
| Tables_in_22_r |
+----------------+
| ipl            |
+----------------+
1 row in set (0.0017 sec)
 MySQL  localhost:3306 ssl  22_r  SQL > use 22r;
Default schema set to `22r`.
Fetching global names, object names from `22r` for auto-completion... Press ^C to stop.
 MySQL  localhost:3306 ssl  22r  SQL > show tables;
+---------------+
| Tables_in_22r |
+---------------+
| emp           |
+---------------+
1 row in set (0.0018 sec)
 MySQL  localhost:3306 ssl  22r  SQL > desc emp;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| spn   | int         | YES  |     | NULL    |       |
| sid   | int         | YES  |     | NULL    |       |
| sname | varchar(10) | YES  |     | NULL    |       |
| smail | varchar(40) | YES  |     | NULL    |       |
| sorg  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
5 rows in set (0.0027 sec)
 MySQL  localhost:3306 ssl  22r  SQL > select * from emp;
Empty set (0.0208 sec)
 MySQL  localhost:3306 ssl  22r  SQL > use 22_r;
Default schema set to `22_r`.
Fetching global names, object names from `22_r` for auto-completion... Press ^C to stop.
 MySQL  localhost:3306 ssl  22_r  SQL > show tables;
+----------------+
| Tables_in_22_r |
+----------------+
| ipl            |
+----------------+
1 row in set (0.0016 sec)
 MySQL  localhost:3306 ssl  22_r  SQL > desc ipl;
+--------+---------------+------+-----+---------+-------+
| Field  | Type          | Null | Key | Default | Extra |
+--------+---------------+------+-----+---------+-------+
| pos    | int           | YES  |     | NULL    |       |
| Team   | char(10)      | YES  |     | NULL    |       |
| Played | int           | YES  |     | NULL    |       |
| Won    | int           | YES  |     | NULL    |       |
| Loss   | int           | YES  |     | NULL    |       |
| NR     | int           | YES  |     | NULL    |       |
| NRR    | decimal(10,0) | YES  |     | NULL    |       |
| Points | int           | YES  |     | NULL    |       |
+--------+---------------+------+-----+---------+-------+
8 rows in set (0.0034 sec)
 MySQL  localhost:3306 ssl  22_r  SQL > select * from ipl;
+-----+------+--------+-----+------+----+-----+--------+
| pos | Team | Played | Won | Loss | NR | NRR | Points |
+-----+------+--------+-----+------+----+-----+--------+
|   1 | SRH  |     14 |  12 |    2 |  0 |   2 |     24 |
|   2 | RR   |     14 |  10 |    4 |  0 |   1 |     20 |
|   3 | RCB  |     14 |   9 |    4 |  1 |   1 |     19 |
|   4 | MI   |     14 |   9 |    4 |  1 |   1 |     19 |
|   5 | CSK  |     14 |   7 |    7 |  0 |   0 |     14 |
|   1 | SRH  |     14 |  12 |    2 |  0 |   2 |     24 |
|   2 | RR   |     14 |  10 |    4 |  0 |   1 |     20 |
|   3 | RCB  |     14 |   9 |    4 |  1 |   1 |     19 |
|   4 | MI   |     14 |   9 |    4 |  1 |   1 |     19 |
|   5 | CSK  |     14 |   7 |    7 |  0 |   0 |     14 |
+-----+------+--------+-----+------+----+-----+--------+
10 rows in set (0.0163 sec)
 MySQL  localhost:3306 ssl  22_r  SQL > select Team,concat("cric",Team) from ipl;
+------+---------------------+
| Team | concat("cric",Team) |
+------+---------------------+
| SRH  | cricSRH             |
| RR   | cricRR              |
| RCB  | cricRCB             |
| MI   | cricMI              |
| CSK  | cricCSK             |
| SRH  | cricSRH             |
| RR   | cricRR              |
| RCB  | cricRCB             |
| MI   | cricMI              |
| CSK  | cricCSK             |
+------+---------------------+
10 rows in set (0.0006 sec)
 MySQL  localhost:3306 ssl  22_r  SQL > select Team,concat("cric-",Team) from ipl;
+------+----------------------+
| Team | concat("cric-",Team) |
+------+----------------------+
| SRH  | cric-SRH             |
| RR   | cric-RR              |
| RCB  | cric-RCB             |
| MI   | cric-MI              |
| CSK  | cric-CSK             |
| SRH  | cric-SRH             |
| RR   | cric-RR              |
| RCB  | cric-RCB             |
| MI   | cric-MI              |
| CSK  | cric-CSK             |
+------+----------------------+
10 rows in set (0.0008 sec)
 MySQL  localhost:3306 ssl  22_r  SQL > select Team,length(Team) from emp;
ERROR: 1146 (42S02): Table '22_r.emp' doesn't exist
 MySQL  localhost:3306 ssl  22_r  SQL > select Team,length(Team) from ipl;
+------+--------------+
| Team | length(Team) |
+------+--------------+
| SRH  |            3 |
| RR   |            2 |
| RCB  |            3 |
| MI   |            2 |
| CSK  |            3 |
| SRH  |            3 |
| RR   |            2 |
| RCB  |            3 |
| MI   |            2 |
| CSK  |            3 |
+------+--------------+
10 rows in set (0.0009 sec)
 MySQL  localhost:3306 ssl  22_r  SQL > select won,length(won) from ipl;
+-----+-------------+
| won | length(won) |
+-----+-------------+
|  12 |           2 |
|  10 |           2 |
|   9 |           1 |
|   9 |           1 |
|   7 |           1 |
|  12 |           2 |
|  10 |           2 |
|   9 |           1 |
|   9 |           1 |
|   7 |           1 |
+-----+-------------+
10 rows in set (0.0008 sec)
 MySQL  localhost:3306 ssl  22_r  SQL > select Team,lower(Team),upper(Team) from emp;
ERROR: 1146 (42S02): Table '22_r.emp' doesn't exist
 MySQL  localhost:3306 ssl  22_r  SQL > select Team,lower(Team),upper(Team) from ipl;
+------+-------------+-------------+
| Team | lower(Team) | upper(Team) |
+------+-------------+-------------+
| SRH  | srh         | SRH         |
| RR   | rr          | RR          |
| RCB  | rcb         | RCB         |
| MI   | mi          | MI          |
| CSK  | csk         | CSK         |
| SRH  | srh         | SRH         |
| RR   | rr          | RR          |
| RCB  | rcb         | RCB         |
| MI   | mi          | MI          |
| CSK  | csk         | CSK         |
+------+-------------+-------------+
10 rows in set (0.0009 sec)
 MySQL  localhost:3306 ssl  22_r  SQL > select concat("cricket","teamnumbers") from ipl;
+---------------------------------+
| concat("cricket","teamnumbers") |
+---------------------------------+
| cricketteamnumbers              |
| cricketteamnumbers              |
| cricketteamnumbers              |
| cricketteamnumbers              |
| cricketteamnumbers              |
| cricketteamnumbers              |
| cricketteamnumbers              |
| cricketteamnumbers              |
| cricketteamnumbers              |
| cricketteamnumbers              |
+---------------------------------+
10 rows in set (0.0009 sec)
 MySQL  localhost:3306 ssl  22_r  SQL > select length("hello"),concat("cricket","teamnumbers") from ipl;
+-----------------+---------------------------------+
| length("hello") | concat("cricket","teamnumbers") |
+-----------------+---------------------------------+
|               5 | cricketteamnumbers              |
|               5 | cricketteamnumbers              |
|               5 | cricketteamnumbers              |
|               5 | cricketteamnumbers              |
|               5 | cricketteamnumbers              |
|               5 | cricketteamnumbers              |
|               5 | cricketteamnumbers              |
|               5 | cricketteamnumbers              |
|               5 | cricketteamnumbers              |
|               5 | cricketteamnumbers              |
+-----------------+---------------------------------+
10 rows in set (0.0006 sec)
 MySQL  localhost:3306 ssl  22_r  SQL > select length("hello"),concat("cricket","teamnumbers") from dual;
+-----------------+---------------------------------+
| length("hello") | concat("cricket","teamnumbers") |
+-----------------+---------------------------------+
|               5 | cricketteamnumbers              |
+-----------------+---------------------------------+
1 row in set (0.0007 sec)
 MySQL  localhost:3306 ssl  22_r  SQL > select substring (ename,1,3) from ipl;
ERROR: 1630 (42000): FUNCTION 22_r.substring does not exist. Check the 'Function Name Parsing and Resolution' section in the Reference Manual
 MySQL  localhost:3306 ssl  22_r  SQL > select left(ename,3),right(ename,3) from ipl;
ERROR: 1054 (42S22): Unknown column 'ename' in 'field list'
 MySQL  localhost:3306 ssl  22_r  SQL > select substring (Team,1,3) from ipl;
ERROR: 1630 (42000): FUNCTION 22_r.substring does not exist. Check the 'Function Name Parsing and Resolution' section in the Reference Manual
 MySQL  localhost:3306 ssl  22_r  SQL > select left(Team,3),right(Team,3) from ipl;
+--------------+---------------+
| left(Team,3) | right(Team,3) |
+--------------+---------------+
| SRH          | SRH           |
| RR           | RR            |
| RCB          | RCB           |
| MI           | MI            |
| CSK          | CSK           |
| SRH          | SRH           |
| RR           | RR            |
| RCB          | RCB           |
| MI           | MI            |
| CSK          | CSK           |
+--------------+---------------+
10 rows in set (0.0009 sec)
 MySQL  localhost:3306 ssl  22_r  SQL > select * from ipl;
+-----+------+--------+-----+------+----+-----+--------+
| pos | Team | Played | Won | Loss | NR | NRR | Points |
+-----+------+--------+-----+------+----+-----+--------+
|   1 | SRH  |     14 |  12 |    2 |  0 |   2 |     24 |
|   2 | RR   |     14 |  10 |    4 |  0 |   1 |     20 |
|   3 | RCB  |     14 |   9 |    4 |  1 |   1 |     19 |
|   4 | MI   |     14 |   9 |    4 |  1 |   1 |     19 |
|   5 | CSK  |     14 |   7 |    7 |  0 |   0 |     14 |
|   1 | SRH  |     14 |  12 |    2 |  0 |   2 |     24 |
|   2 | RR   |     14 |  10 |    4 |  0 |   1 |     20 |
|   3 | RCB  |     14 |   9 |    4 |  1 |   1 |     19 |
|   4 | MI   |     14 |   9 |    4 |  1 |   1 |     19 |
|   5 | CSK  |     14 |   7 |    7 |  0 |   0 |     14 |
+-----+------+--------+-----+------+----+-----+--------+
10 rows in set (0.0009 sec)
 MySQL  localhost:3306 ssl  22_r  SQL > select won,ceil(won),floor(won) from ipl;
+-----+-----------+------------+
| won | ceil(won) | floor(won) |
+-----+-----------+------------+
|  12 |        12 |         12 |
|  10 |        10 |         10 |
|   9 |         9 |          9 |
|   9 |         9 |          9 |
|   7 |         7 |          7 |
|  12 |        12 |         12 |
|  10 |        10 |         10 |
|   9 |         9 |          9 |
|   9 |         9 |          9 |
|   7 |         7 |          7 |
+-----+-----------+------------+
10 rows in set (0.0010 sec)
 MySQL  localhost:3306 ssl  22_r  SQL > select won,round(won,1) from ipl;
+-----+--------------+
| won | round(won,1) |
+-----+--------------+
|  12 |           12 |
|  10 |           10 |
|   9 |            9 |
|   9 |            9 |
|   7 |            7 |
|  12 |           12 |
|  10 |           10 |
|   9 |            9 |
|   9 |            9 |
|   7 |            7 |
+-----+--------------+
10 rows in set (0.0009 sec)
 MySQL  localhost:3306 ssl  22_r  SQL > select week("2025-02-10") from dual;
+--------------------+
| week("2025-02-10") |
+--------------------+
|                  6 |
+--------------------+
1 row in set (0.0005 sec)
 MySQL  localhost:3306 ssl  22_r  SQL > select dayname("2025-02-10") from dual;
+-----------------------+
| dayname("2025-02-10") |
+-----------------------+
| Monday                |
+-----------------------+
1 row in set (0.0025 sec)
 MySQL  localhost:3306 ssl  22_r  SQL > select dayofweek("2025-02-10") from dual;
+-------------------------+
| dayofweek("2025-02-10") |
+-------------------------+
|                       2 |
+-------------------------+
1 row in set (0.0007 sec)