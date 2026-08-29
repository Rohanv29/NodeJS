const add = require('./sum');

const requesthandler = (req, res) => {

    console.log(req.url, req.method);

    // HOME PAGE
    if (req.url === '/') {

        res.setHeader('Content-Type', 'text/html');

        res.write(`
            <html>
                <head>
                    <title>Calculator</title>
                </head>

                <body>
                    <h1>Welcome !!</h1>

                    <h3>
                        Click Calculator to go to calculator page
                    </h3>

                    <a href="/calculator">
                        Calculator
                    </a>
                </body>
            </html>
        `);

        return res.end();
    }


    // CALCULATOR PAGE
    else if (req.url === '/calculator') {

        res.setHeader('Content-Type', 'text/html');

        res.write(`
            <html>

                <head>
                    <title>Calculator Page</title>
                </head>

                <body>

                    <h1>Here is your Calculator</h1>

                    <form action="/calculate-result" method="POST">

                        <input
                            type="text"
                            placeholder="First Number"
                            name="first"
                        />

                        <input
                            type="text"
                            placeholder="Second Number"
                            name="second"
                        />

                        <br><br>

                        <button type="submit">
                            Sum
                        </button>

                    </form>

                </body>

            </html>
        `);

        return res.end();
    }


    // CALCULATE RESULT
    else if (
        req.url.toLowerCase() === '/calculate-result' &&
        req.method === 'POST'
    ) {

        return add(req, res);
    }


    // 404 PAGE
    res.setHeader('Content-Type', 'text/html');

    res.write(`
        <html>

            <head>
                <title>Practice Set</title>
            </head>

            <body>

                <h1>404 Page Does Not Exist</h1>

                <a href="/">
                    Go to Home
                </a>

            </body>

        </html>
    `);

    return res.end();
};

exports.requesthandler = requesthandler;