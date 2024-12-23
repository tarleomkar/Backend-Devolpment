Two Major Components to Learn Backend : 
    - Programming Language : JS, Java, PHP, Python, C++ , etc ( With a Framework)
    - Database : MySql, Mongo DB, etc (ORM, ODM)

- DB send data to Backend which connects to Frontend through API calls.
- A JavaScript based Backend can handle : 
    - Data, File, Third Party (API)

File Structure :
1. Package.json
2. .env
3. Readme, .git, .lint, pretier, etc
4. [src]
1. index : Database connection
2. app : config, cookie
3. constants : enums, Database - name
5. [DB] : Actual code that connects to Database
6. [Models] : Schema of Data for DB
7. [Controllers] : Functions / Methods ( MVC : C = Controllers )
8. [Routes] : For Routing
9. [Middlewares] 
10. [Utils] : Things which are used again and again.