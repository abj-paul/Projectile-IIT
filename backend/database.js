const DatabaseService = require("./DatabaseService.js");

const project_table_creation_query = `
CREATE TABLE IF NOT EXISTS users(
    projectId INT auto_increment primary key,
    username varchar(30) NOT NULL,
    email varchar(60) NOT NULL,
    projectName varchar(50),
    projectDescription varchar(500),
    githubLink varchar(200),
    liveDemoLink varchar(200),
    comments varchar(200),
    demoImage varchar(200),
)
`;



DatabaseService.executeQuery(project_table_creation_query)
    .then((result)=>{
    });



