
import app from "./app.js";

app.use((req, res) => {
    res.send(`<h1>server running on PORT: http://localhost:${process.env.PORT}</h1>`)
})
app.listen(process.env.PORT, () => {
    console.log( `Server listening on port ${process.env.PORT} `);
});



