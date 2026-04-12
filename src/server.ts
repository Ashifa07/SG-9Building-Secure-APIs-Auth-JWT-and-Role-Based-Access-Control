import app from "./app"

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running, open docs at http://localhost:${PORT}/docs`)
})