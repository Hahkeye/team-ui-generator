const header= 
`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <title>Team Document</title>
    </head>
    <body>
        <header>
            <h1 class="jumbotron text-info bg-secondary text-center">The A Team</h1>
        </header>
        <div class="d-flex p-3 m-3 justify-content-center">
`;
const footer=
`
        </div>
        
    </body>
</html>
`;

// module.export = { header, footer };
exports.header = header;
exports.footer = footer;
