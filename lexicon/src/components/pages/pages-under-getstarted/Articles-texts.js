import React from "react"

export const Database = () => {
    return (
        <article className="article">
            <p>
                Database can be defined as a repository for storing data or information which is:
                <ul>
                    <li>Interrelated: It means that parts of data within the database are associated with other parts in it, e.g. data on purchased products must be related to customers who bought them.</li>
                    <li>Organized: It means that data is usually arranged on the basis of application requirements; data with the same properties is e.g. grouped together.</li>
                    <li>Accessible & exploitable: It means that data must be available for quick data retrieval by third party applications using a variety of programming languages such as Java.</li>
                </ul>
                </p>
            <p>
                It is the role of database administrator (DBA) to operate, secure, monitor and maintain the database, whereas data administrator is a non-technical position responsible for defining and implementing consistent principles connected with data, such as setting data standards and data definitions that apply to all the databases in an organization.
            </p>
        </article>
    )
}


export const DBMS = () => {
    return (
        <article className="article">
            <p>The simplest type of database is a set of flat files stored on computer disk. A simple data- base usually consists of tables that are managed by a Database Management System (DBMS) used as an interface between a database and its users and other programs which access that database. DBMS helps to define, create, query, update and administer data- base.</p>
            <p>The main functionalities and objectives for DBMS are the following:</p>
            <ul>
                <li>Data availability: It refers to making data available to multiple concurrent users. Such access is controlled by the DBMS to avoid conflicts and deadlocks.</li>
                <li>Data manipulation: This includes alteration of stored data and retrieval of data.</li>
                <li>Data integrity: It refers to the assumption that data available in the database is reliable and correct, without any inconsistencies in data types, legal values, format, key uniqueness and referential integrity.</li>
                <li>Data security: It is connected with preventing unauthorized users from accessing the database; in order to ensure security for the database DBMS uses:</li>
                    <ul>
                        <li>Encryption: It refers to converting data in the database to format which cannot be deciphered by the users who make an attempt to view data.</li>
                        <li>Authentication: It refers to identification of a user trying to access the database by verifying his username and password.</li>
                        <li>Authorization: This is a set of rules that DBAs set up to specify access levels that individuals or groups of users can have.</li>
                    </ul>
                <li>Data backup & recovery: This means that DBMS provides ways to recover a database if there is a risk of data loss. The easiest way to do this is to make regular backups of data or replicate database from master server to slave server.</li>
            </ul>
        </article>
    )
}

export const DbmsTypes = () => {
    return (
        <article className="article">
            <p>Presently, the most widely used DBMS types are the following:</p>
            <p>Relational DBMS (RDBMS): This is the most widely used data model which is based on relational model defined by E.F. Codd. It will be discussed in more detail in the next part of this chapter. Data in RDBMS is stored in database objects called tables. A table is a collection of related data entries and it consists of columns (attributes) and rows (tuples). A field is a column in a table which includes specific information about every record in it. Data stored in different tables is related by common fields. Such connection between two tables is called a relationship. The most popular RDBMS are MS SQL Server®, DB2®, Oracle® and MySQL®. Most RDBMS use SQL (Structured Query Language) as database query language.</p>
            <p>Object-oriented DBMS (OODBMS): It is used for storing data in the form of objects. An object-oriented database can store data from various sources, such as photographs and texts, and produce output in multimedia format.</p>
            <p>Object-relational DMBS (ORDBMS): This is an RDBMS engine with additional functionality to handle such objects as audio, video and image files. ORDBMS was created as a result of increased usage of object-oriented programming languages.</p>
            <br/>
            <br/>
            <p>Data in DBMS can be stored in different ways:</p>
            <p>In-memory DBMS (IMDBMS): This is a DBMS in which the entire database is stored in RAM (Random Access Memory) instead of SSDs (Solid State Drives) to optimize data storage and speed of data retrieval. Owing to massive intra-query parallelism on many-core central processing units (CPUs) the execution time of complex analytical queries can be reduced to seconds.</p>
            <p>Cloud-based DBMS: This is a distributed DBMS which is based on cloud computing platform. It means that database is stored within a cloud and accessible remotely.</p>
            <p>Distributed DBMS: This is a centralized application which manages databases distributed over multiple different computers.</p>
            <p>Embedded DBMS: This is a DBMS which is tightly integrated with application software which requires access to data. Database is however not accessible for end-users of the application.</p>
            <p>Database as a Service (DBaaS): This is a cloud computing service model in which database is located on service provider’s servers. It is accessed by the client over the network. Clients lease use of a database. Administration of such database is provided by the service provider.</p>
        </article>
    )
}

export const DatabaseModels = ( ) => {
    return (
        <article className="article">
            <p>Building a conceptual, logical and physical database model is just one of the steps in database development process.</p>
            <p>In conceptual data model elements of the requirements analysis are grouped into individual entities presented at the high level. Entities are objects which store data on the same topic, e.g. sales entity usually stores such information as order number, order quantity, order value, etc. Conceptual data model also presents relationships between those entities. These relationships include i.a. one-to-many relationships, one-to-one relationships, many-to-many relationships.</p>
            <p>Logical data model includes all entities, their attributes and relationships between those entities, with respect to business requirements. The complete logical data model is called the Entity Relationship Diagram (ERD). The most popular notations used in ERDs are crow’s foot notation and UML (Unified Modelling Language) notation. At the end of the analysis phase, the entities are fully normalized, the unique identifier for each entity is determined and any many-to-many relationships are resolved into associative entities. There are also primary and foreign keys specified for each entity.</p>
            <p>Physical database model is a graphical representation of database implementation. In other words, it shows how the model will be built in the database. It is based on the logical model and it includes all such information about database structures as table names, column names, column data types, constraints (including information whether a column can be null or not), as well as previously defined primary keys, foreign keys and relationships between tables.</p>
        </article>
    )
}

export const IsOrAre = () => {
    return (
        <article className="article">
            <p>The word data, meaning a given fact, originates from Latin. Its singular is datum, but this form is rarely used. In the nineteenth century, data gained new meaning — facts, statistics and figures — and it is used both as plural and singular, depending on the intention of the speaker or his personal preference.</p>
            <p>Data is usually treated as uncountable noun in non-scientific texts (including IT texts). It can be replaced by the word information.</p>
            <p><span>Data</span> stored in different tables <span>is</span> related by common fields which are database table columns.</p>
            <p>Much of the <span>data</span> used in the project <span>was</span> out of date, so the testers were unable to test the solution properly.</p>
            <br/>
            <p>Data is usually treated as countable noun in specialized scientific fields. It can be replaced by the word facts or figures.</p>
            <p>A correlation coefficient value of zero means that <span>data are</span> randomly scattered and there is no linear correlation between the variables.</p>
        </article>
    )
}