# Getting Started

### Prerequisites
* Java 11
* PostgreSQL 12
* It's a must to use unified code style ([download link](https://github.com/HPI-Information-Systems/Metanome/wiki/Installing-the-google-styleguide-settings-in-intellij-and-eclipse)).

### Setup
There are 2 sample setup files:
* `backend/src/main/resources/sample-application.properties`
* `backend/sample-gradle.properties`

Duplicate them and remove the `sample-` prefix. Then enter your PostgreSQL's database url, 
username and password in `application.properties` and `gradle.properties` files.

# Using Flyway

### Initialization
* Make sure that you entered your PostgreSQL database url, username and password in `gradle.properties`.
* Initialize tables by running `gradlew flywayMigrate -i` in terminal.

### Modifying tables
New tables are created or modified by creating a new file in `src/main/resources/db/migration`.  
The file name must be formatted like this: `V1__name.sql` (with two underscores). The version can be 
1.1, 1.2, etc for minimal changes.  

After creating a new version file, again run `gradlew flywayMigrate -i` in terminal  

To modify existing tables use PostgreSQL's table modification functionality:  
`ALTER TABLE table_name ADD new_column_name column_definition;`  
`ALTER TABLE table_name DROP column_name;`
