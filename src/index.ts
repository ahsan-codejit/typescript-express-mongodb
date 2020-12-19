import app from "./app";

const PORT: number = parseInt(process.env.PORT as string, 10) || 5000;

app.listen(PORT, () => {
    console.log('Ventures Manager listening on port ' + PORT);
});